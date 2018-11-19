import { NavigationActions, StackActions } from 'react-navigation'

let _navigator

const setTopLevelNavigator = (navigatorRef) => {
  _navigator = navigatorRef
}

const navigate = (routeName, params) => {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  )
}

const resetAction = (routeName) => {
  _navigator.dispatch(
    StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName }),
      ],
    })
  )
}

const toggleDrawer = () => {
  _navigator.toggleDrawer()
}

// add other navigation functions that you need and export them

export default {
  navigate,
  resetAction,
  toggleDrawer,
  setTopLevelNavigator,
}