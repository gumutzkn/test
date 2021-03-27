import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/navbar.component";
import Home from "./pages/Home";
import Users from "./pages/Users";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={Users} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
