import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Link to="/">HOME</Link>
          <Link to="/other-page">OTHER PAGE</Link>
        </header>
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/other-page" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
