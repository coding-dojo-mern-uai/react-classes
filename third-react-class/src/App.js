import { Route, Switch } from 'react-router-dom'

import NavBar from './NavBar'

import Login from './Router/Login'
import LoginUsername from './Router/LoginUsername'
import Dashboard from './Router/Dashboard'
import Register from './Router/Register'
import Error from './Router/Error'

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact component={Dashboard} path="/" />
        <Route exact component={Login} path="/login" />
        <Route component={LoginUsername} path="/login/:username" />
        <Route component={Register} path="/register" />
        <Route component={Error} />
      </Switch>
    </div>
  )
}

export default App
