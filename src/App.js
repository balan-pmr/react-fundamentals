

import ComponentReact from './JSX/class'
import ComponentJSX from './JSX/jsx'
import Clock from './clock/clock'
import ExampleState from './hooks/useState'
import WarnBanner from './warn/warn-banner'
import Calculator from './convert-temperature/calculator'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navigation  from './layout/Navigation';
import Home  from './layout/Home';
import RootComponent from './code-examples/example-one/passing-props-to-childs';
import RootComponent2 from './code-examples/example-two/passing-props-to-child-part2';
import ExampleEffect from './hooks/useEffect'
import LifeCycles from './hooks/useEffect-life-cycles'
import ConnectAPI from './code-examples/example-tree/connectWithAPI';


function App() {
  
  let centered = {
    display: "flex", alignItems:"center", justifyContent:"space-evenly" 
  }

  return (
    <div style={centered}>
      <BrowserRouter >
      <Navigation/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/warn" element={<WarnBanner />} />
          <Route path="/example-state" element={<ExampleState />} />
          <Route path="/effect" element={<ExampleEffect/>} />
          <Route path="/life" element={<LifeCycles/>} />                    
          <Route path="/clock" element={<Clock />} />
          <Route path="/jsx" element={<ComponentJSX />} />
          <Route path="/react" element={<ComponentReact />} />
          <Route path="/example-1" element={<RootComponent />} />
          <Route path="/2" element={<RootComponent2 />} />       
          <Route path="/3" element={<ConnectAPI />} />          
          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}


export default App;
