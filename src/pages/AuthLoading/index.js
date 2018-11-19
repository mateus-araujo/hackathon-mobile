import React, { Component } from 'react'
import {
  AsyncStorage,
  // StatusBar,
  View,
} from 'react-native'

import { Spinner } from '../../components'
import styles from './styles'
import { colors } from '../../styles'

class AuthLoading extends Component {
  constructor(props) {
    super(props)

    navigation = props.navigation
    this._bootstrapAsync()
  }

  static navigationOptions = {
    header: null
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const token = await AsyncStorage.getItem('@Enel:token')

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    navigation.navigate(token ? 'App' : 'Auth')
  }

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <Spinner size="large" color={colors.dark} />
        {/* <StatusBar barStyle="default" /> */}
      </View>
    )
  }
}

export { AuthLoading }
