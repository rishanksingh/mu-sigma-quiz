import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Login from './components/Login'
import Quiz from './components/Playground'
import Home from './components/home/Home'
import PrivateRoute from './Router/PrivateRoute'
import PublicRoute from './Router/PublicRoute'
import Signup from './components/Signup';

function App() {
  return (
    <div>
      <Router>
        <Switch>
         <Route exact path="/" render={() => {
                    return (
                      sessionStorage.getItem('authentication') ?
                      <Redirect to="/home" /> :
                      <Redirect to="/login" /> 
                    )}} />
         <PublicRoute exact path="/login" component={Login} />
         <PublicRoute exact path="/signup" component={Signup} />
         <PrivateRoute exact path="/home" component={Home} />
         <PrivateRoute exact path="/quiz" component={Quiz} />
         </Switch>
       </Router>
    </div>
  );
}

export default App;
