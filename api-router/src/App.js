// import ApiPokemon from './ApiPokemon'
// import ApiPokemonAxios from './ApiPokemonAxios'
import { Switch, Route } from 'react-router-dom'
import Welcome from './Welcome'
import Content from './Content'

function App() {
  return (
    <div>
      <h1>React Router</h1>
      <Switch>
        <Route exact path="/welcome" component={Welcome} />
        <Route path="/:content?/:color?/:backgroundColor?" component={Content} />
      </Switch>
    </div>
  )
}

export default App
