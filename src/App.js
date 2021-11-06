import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";
import UploadImage from "./UploadImage";
import UpdateProfile from "./UpdateProfile";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/reset" component={Reset} />
          <Route exact path="/UploadImage" component={UploadImage} />
          <Route exact path="/UpdateProfile" component={UpdateProfile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;