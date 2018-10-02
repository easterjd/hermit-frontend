import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, View, AsyncStorage } from 'react-native'
import { Button } from 'react-native-elements'
import ProfileHeader from '../components/ProfileHeader'
import CommentsList from '../components/CommentsList'
import ImageView from '../components/ImageView'
import UserHeader from '../components/UserHeader'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userLogout } from '../actions/userActions'

const mapStatetoProps = ({users}) => ({users})
const mapDispatchtoProps = (dispatch) => bindActionCreators({
    userLogout
}, dispatch)

class UserProfile extends Component {
    static navigationOptions = {
        title: "User Profile",
    }
    
    logout = () => {
        this.props.userLogout()
        this.props.navigation.navigate('AuthLoading')
    }

    render() {
        return (
            <View>
                <ScrollView>
                    <UserHeader />
                    <View style={{paddingVertical: 5}}>
                        <Button title="LOGOUT" onPress={this.logout} buttonStyle={{paddingVertical: 5}} />

                    </View>

                </ScrollView>
            </View>
        )
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(UserProfile)