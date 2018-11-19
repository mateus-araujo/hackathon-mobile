import React from 'react'
import { Provider } from 'react-redux'

import NavigationService from './services/NavigationService'
import { store } from './store'
import Routes from './routes'
import './ReactotronConfig'

const App = () => (
  <Provider store={store}>
    <Routes
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef)
      }}
    />
  </Provider>
)

export default App
