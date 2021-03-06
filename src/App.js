import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import profile from "./profile";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">history Sample</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>404 Not Found Error : {location.pathname}</p>
            </div>
          )}
        />
        {/* <Route path="/profile/:username" component={profile} /> */}
        {/* <Route path={["/about","/info"]} component={About} /> 배열형식으로 가능 */}
      </Switch>
    </div>
  );
}

export default App;
