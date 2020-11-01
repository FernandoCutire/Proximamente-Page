import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Próximamente</h1>
        <p>Actualmente estamos trabajando duro en esta página</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Notifícame cuando esté lista
        </a>
      </header>
    </div>
  );
}

export default App;
