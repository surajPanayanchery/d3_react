import { BrowserRouter, Link, Route } from "react-router-dom";
import "./App.css";
import { MouseFollower } from "./features/mouse-follower/MouseFollower";
import { FaceContainer } from "./features/svg/Smiley/FaceContainer";

export const Category = () => (
  <div>
    <h1>Snippets</h1>
    <h5>Click on a snippet</h5>
    <ul>
      <li>
        <Link to={`smiley`}>Smiley</Link>
      </li>
      <li>
        <Link to={`follower`}>Mouse Follower</Link>
      </li>
      {/* <li>
        <Link to={`${match.url}/dresses`}>Dresses</Link>
      </li> */}
    </ul>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Category></Category>
      <Route path="/smiley" component={FaceContainer} />
      <Route path="/follower" component={MouseFollower} />
    </BrowserRouter>
  );
}

export default App;
