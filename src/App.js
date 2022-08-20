import logo from './logo.svg';
import './App.css';
import ComponentReact from './JSX/class'
import ComponentJSX from './JSX/jsx'
import Clock from './clock/clock'
import ExampleState from './hooks/useState'


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Clock />
        <ExampleState />

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

        <ComponentReact />

        <ComponentJSX />
        
        <Clock message={'This is a custom message'} />

      </header>
    </div>
  );
}

export default App;
