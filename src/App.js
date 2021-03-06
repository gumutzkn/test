import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";
import Lang from "./components/Lang/lang.component";
import Navbar from "./components/Navbar/navbar.component";
import EditUserContextProvider from "./contexts/EditUserContext";
import LangContextProvider from "./contexts/LangContext";
import UserContextProvider from "./contexts/UserContext";
import Home from "./pages/Home";
import Users from "./pages/Users";

export default function App() {
  return (
    <LangContextProvider>
      <EditUserContextProvider>
        <UserContextProvider>
          <div className="container">
            <Router>
              <Navbar />
              <Lang />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/users" component={Users} />
              </Switch>
            </Router>
          </div>
        </UserContextProvider>
      </EditUserContextProvider>
    </LangContextProvider>
  );
}
