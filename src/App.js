import { Switch, Route } from 'react-router-dom'
import FormBase from './pages/FormBase'


function App() {
  return (
    <div className="App">
      <Switch>
        Hello World!
        <Route exact path='/form' component={FormBase}/>
        <Route  render={() => {<div>Default Route</div>}}/>
      </Switch>
    </div>
  );
}

export default App;
