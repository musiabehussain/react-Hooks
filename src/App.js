import './App.css';
import ClassCounter from './components/classCounter';

import Hookcounter from './components/Hookcounter';
import Hookcounter2 from './components/Hookcounter2';
import HookCounter3 from './components/HookCounter3';
import Hookcounterfour from './components/Hookcounterfour';

function App() {
  return (
    <div className="App">
      apple   

  <ClassCounter/>
   <Hookcounter/>
   <h1>hooks counter  2 </h1>
   <Hookcounter2/>
   <h1>usestse with object</h1>

   <HookCounter3/> 
   <h1>useste hook with array</h1>
   <Hookcounterfour/>
    </div>

  );
}

export default App;
