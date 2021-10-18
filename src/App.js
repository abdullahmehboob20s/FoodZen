import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "pages/Home/Home";
import FAQ from "pages/FAQ/FAQ";
import CookingProcess from "pages/CookingProcess/CookingProcess";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/cooking-process" component={CookingProcess} />
      </Switch>
    </Router>
  );
}

export default App;
