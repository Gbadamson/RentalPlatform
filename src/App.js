import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { app } from "./components/Firebase";
import HomeCard from "./components/Cards/Card";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeCard} />
      </Switch>
    </Router>
  );
}

export default App;
