

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
import CleanComponent from './code-examples/example-four/useEffect-clean-component';
import ExampleUseContext from './hooks/useContext'
import ExampleUseRef  from './hooks/useRef'
import ExampleUseMemo  from './hooks/useMemo'

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
          <Route path="/example-useState" element={<ExampleState />} />
          <Route path="/example-useEffect" element={<ExampleEffect/>} />
          <Route path="/example-useContext" element={<ExampleUseContext/>} />
          <Route path="/example-useRef" element={<ExampleUseRef/>} />
          <Route path="/example-useMemo" element={<ExampleUseMemo/>} />          
          <Route path="/life" element={<LifeCycles/>} />                    
          <Route path="/clock" element={<Clock />} />
          <Route path="/jsx" element={<ComponentJSX />} />
          <Route path="/react" element={<ComponentReact />} />
          <Route exact path="/example-1" element={<RootComponent />} />
          <Route exact path="/example-2" element={<RootComponent2 />} />       
          <Route exact path="/example-3" element={<ConnectAPI />} />  
          <Route exact path="/example-4" element={<CleanComponent name='Pedrx' lastName='Balxn'  />} />  
          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}


export default App;
