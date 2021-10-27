import "./App.css";
import List from "./Components/List";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateTask from "./Components/CreateTask";
import Nav from "./Components/Nav";
import UpdateTask from "./Components/UpdateTask";

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Switch>
          <Route exact path="/" component={List} />
          <Route exact path="/create" component={CreateTask} />
          <Route exact path="/update" component={UpdateTask} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
