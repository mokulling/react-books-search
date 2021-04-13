import {
  BrowserRouter as Router,
  Switch,
  Route

} from 'react-router-dom'
import Save from './pages/save'
import Home from './pages/home'



function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/Save">
        <Save />
      </Route>
      <Route>
        <Home />
      </Route>
      </Switch>


    </Router>

    );
}

export default App;
