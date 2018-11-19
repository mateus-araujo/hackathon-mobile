import React from 'react'

import NavigationService from './services/NavigationService'
import Routes from './routes'
import './ReactotronConfig'

const App = () => (
    <Routes
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef)
      }}
    />
)

export default App
