import UseEffectWithUseState from "./Components/UseEffects/UseEffectWithUseState";
import UseEffectWithProps from "./Components/UseEffects/UseEffectWithProps";
import { useState } from "react";
import UseEffectWithConditions from "./Components/UseEffects/UseEffectWithConditions";
import Pure from "./Components/PureComponents/Pure";
import UseMemo from "./Components/UseMemoHook/UseMemo";
import UseCallback from "./Components/UseCallbackHook/UseCallback";
import ContextApiWithHooks from "./Components/ContextAPIwithHooks/ContextApiWithHooks";
import UseRef from "./Components/UseRef Hook/UseRef";
import ForwardRef from "./Components/ForwardRef/ForwardRef";
import ArrayListing from "./Components/ArrayListing/ArrayListing";
import BootstrapArrayListing from "./Components/BootstrapArrayListing/BootstrapArrayListing";
import NestedListWithNestedArray from "./Components/NestedListWithNestedArray/NestedListWithNestedArray";
import Reuse from "./Components/Reuse/Reuse";
import LiftingStateUp from "./Components/Lifiting State UP/LiftingStateUp";
import ControlledComp from "./Components/ControlledComponent/ControlledComp";
const App = () => {
  // const [count,setCount] = useState(0)
  // const [age, setAge] = useState(20);
  // const [count, setCount] = useState(0);
  return (
    <>
      {/* <UseEffectWithUseState/> */}
      {/* <UseEffectWithProps data={count}/>
     <button onClick={()=>setCount(count+1)}>update</button> */}
      {/* <UseEffectWithConditions age={age} count={count} />
      <button onClick={() => setAge(age + 1)}>Update Age</button>
      <button onClick={() => setCount(count + 1)}>Update Count</button> */}
      {/* <Pure/> */}
      {/* <UseMemo/> */}
      {/* <UseCallback/> */}
      {/* <ContextApiWithHooks/> */}
      {/* <UseRef/> */}
      {/* <ForwardRef/> */}
      {/* <ArrayListing/> */}
      {/* <BootstrapArrayListing/> */}
      {/* <NestedListWithNestedArray/> */}
      {/* <Reuse/> */}
      {/* <LiftingStateUp/> */}
      <ControlledComp/>
    </>
  );
};

export default App;
