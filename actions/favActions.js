import axios from 'axios'
import { TRAIL_SEARCH_FAILURE } from './trailActions';

export const GET_USER_FAVS = 'GET_USER_FAVS'
export const GET_USER_FAVS_SUCCESS = 'GET_USER_FAVS_SUCCESS'
export const GET_USER_FAVS_FAILURE = 'GET_USER_FAVS_FAILURE'

export const FAV_TRAIL_PENDING = 'FAV_TRAIL_PENDING'
export const FAV_TRAIL_SUCCESS = 'FAV_TRAIL_SUCCESS'
export const FAV_TRAIL_FAILURE = 'FAV_TRAIL_FAILURE'

export const UNFAV_TRAIL_PENDING = 'UNFAV_TRAIL_PENDING'
export const UNFAV_TRAIL_SUCCESS = 'UNFAV_TRAIL_SUCCESS'
export const UNFAV_TRAIL_FAILURE = 'UNFAV_TRAIL FAILURE'

const BASE_URL = 'http://localhost:5000/api'

export const getFavsUser = (userID, token) => {
    return async (dispatch) => {
        try {
            console.log('in action')
            dispatch({type: GET_USER_FAVS})
            let response = await axios.get(`${BASE_URL}/favs/user/${userID}`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            // console.log(response)
            dispatch({type: GET_USER_FAVS_SUCCESS, payload: response.data.favs})
        } catch (e) {
            dispatch({type: TRAIL_SEARCH_FAILURE, payload: e})
        }
    }
}

export const favTrail = (userID, trailID, token) => {
    return async (dispatch) => {
        try {
            dispatch({type: FAV_TRAIL_PENDING})
            let response = await axios({
                method: 'post',
                url: `${BASE_URL}/favs/`,
                headers: {
                    authorization: `Bearer ${token}`
                },
                data: {
                    user_id: userID,
                    trail_id: trailID
                }
            })
            dispatch({type: FAV_TRAIL_SUCCESS, payload: response.data.fav})
        } catch (e) {
            dispatch({type: FAV_TRAIL_FAILURE, payload: e})
        }
    }
}

export const unFavTrail = (userID, trailID, token) => {
    return async (dispatch) => {
        try {
            dispatch({type: UNFAV_TRAIL_PENDING})
            let response = await axios({
                method: 'delete',
                url: `${BASE_URL}/favs/user/${userID}`,
                headers: {
                    authorization: `Bearer ${token}`
                },
                data: {
                    trail_id: trailID
                }
            })
            console.log(response)
            dispatch({type: UNFAV_TRAIL_SUCCESS, payload: trailID})
        } catch (e) {
            dispatch({type: UNFAV_TRAIL_FAILURE, payload: e})
        }
    }
}