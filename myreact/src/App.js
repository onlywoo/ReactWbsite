import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import Home from './Pages/Home';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" Component- {Ho;me}/>
      </Switch>
    </div>
  );
}

export default App;
