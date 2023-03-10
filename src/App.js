import "./App.css";
import { DragDropFiles } from "./components/DragDropFiles";
import AddDriver from "./pages/AddDriver";
import Home from "./pages/Home";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import IndividualDriverDetails from "./pages/IndividualDriverDetails";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/addNewDriver">
            <AddDriver />
          </Route>
          <Route path="/individualDriverDetails/:id">
            <IndividualDriverDetails />
          </Route>
          {/* <DragDropFiles /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
