import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { app } from "./components/Firebase";
import HomeCard from "./components/Cards/Card";
import "antd/dist/antd.css";
import Detail from "./components/Details/Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/cards" component={HomeCard} />
        <Route exact path="/landing" component={Detail} />
      </Switch>
    </Router>
  );
}

export default App;
