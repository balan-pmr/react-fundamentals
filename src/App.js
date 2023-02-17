
import './App.css';
import ComponentReact from './JSX/class'
import ComponentJSX from './JSX/jsx'
import Clock from './clock/clock'
import ExampleState from './hooks/useState'
import WarnBanner from './warn/warn-banner'
import Calculator from './convert-temperature/calculator'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navigation  from './layout/Navigation';
import Home  from './layout/Home';


function App() {
  
  let centered = {position: "absolute",
  left: "50%",
  top: "10%"
  }

  return (
    <div style={centered}>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Navigation />} />
          <Route path="/home" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/warn" element={<WarnBanner />} />
          <Route path="/example-state" element={<ExampleState />} />
          <Route path="/clock" element={<Clock />} />
          <Route path="/jsx" element={<ComponentJSX />} />
          <Route path="/react" element={<ComponentReact />} />

          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}


export default App;
