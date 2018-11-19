import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation'

import {
  AuthLoading, 
  Home, 
  Login, 
  Payments, 
  UpdateRegister, 
  Opinion, 
  SearchUcCode
} from './pages'
import { SideBar } from './components'

import { colors } from './styles'

const App = createDrawerNavigator({
  Home,
  Payments,
  UpdateRegister,
  Opinion
}, { contentComponent: SideBar, initialRouteName: 'Home' })

const Auth = createStackNavigator({
  Login,
  SearchUcCode,
  AuthLoading
}, { initialRouteName: 'Login' })

const Switch = createSwitchNavigator({
  AuthLoading,
  App,
  Auth
}, { initialRouteName: 'AuthLoading' })

const AppContainer = createAppContainer(Switch)

export default AppContainer
