import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { TodoEdit } from "./components/TodoEdit";
import TodoAdd from "./components/TodoAdd";

function App() {
  return (
    <div className="container justify-content-md-center p-2 mb-2 bg-light text-dark">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={TodoAdd} />
          <Route path="/todoedit/:id" component={TodoEdit} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
