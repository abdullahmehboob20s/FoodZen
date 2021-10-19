import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "pages/Home/Home";
import BaseSearch from "pages/BaseSearch/BaseSearch";
import SearchPage from "pages/SearchPage/SearchPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/base-search" component={BaseSearch} />
        <Route exact path="/search-page" component={SearchPage} />
      </Switch>
    </Router>
  );
}

export default App;
