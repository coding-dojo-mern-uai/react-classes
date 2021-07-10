import { Route, Switch } from 'react-router-dom'

import NavBar from './NavBar'

import Login from './Router/Login'
import Register from './Router/Register'
import Dashboard from './Router/Dashboard'
import LoginWithUsername from './Router/LoginWithUsername'

function App() {
  return (
    <div>
      <h1>Routers</h1>
      <NavBar />
      <Switch>
        {/* http://localhost:3000 */}
        <Route exact path="/" component={Dashboard} />
        {/* http://localhost:3000/login */}
        <Route exact path="/login" component={Login} />
        {/* http://localhost:3000/login/username */}
        <Route path="/login/:username" component={LoginWithUsername} />
        {/* http://localhost:3000/register */}
        <Route path="/register" component={Register} />
      </Switch>
      <p>End of router</p>
    </div>
  )
}

export default App
