import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import ShowUser from './Pages/Home/ShowUser/ShowUser';


function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/showuser">
            <ShowUser></ShowUser>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
