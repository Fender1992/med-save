import Toolbar from "./components/Toolbar.jsx";
import Homepage from "./components/Homepage.jsx";
import "./App.css";
import searchIcon from "./assets/search-icon-vector.png";

function App() {
  return (
    <div>
      <Toolbar />

      <header>
        <h1></h1>
        <div id="inputWrapper">
          <img id="icon" src={searchIcon} />
          <input
            id="input"
            type="text"
            placeholder="Search Facilities"
            spellCheck="true"
          ></input>
        </div>
        <p>Search for facilities near you!</p>
        <h1></h1>
      </header>
      <main></main>
    </div>
  );
}

export default App;
