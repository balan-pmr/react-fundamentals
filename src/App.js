import logo from './logo.svg';
import './App.css';
import ComponentReact from './JSX/class'
import ComponentJSX from './JSX/jsx'
import Clock from './clock/clock'
import ExampleState from './hooks/useState'
import WarnBanner from './warn/warn-banner'
import Calculator from './convert-temperature/calculator'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        

        <Calculator/>

        <WarnBanner/>

        <Clock />
        <ExampleState />

        <ComponentReact />

        <ComponentJSX />
        
        <Clock message={'This is a custom message'} />

        {bodyExample}

      </header>
    </div>
  );
}

// render by add {bodyExample} into return 

let bodyExample = <div>

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

</div>

console.log(bodyExample)

export default App;
