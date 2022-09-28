import React, { useState } from "react";
function Hookcounter2() {
  const initilvalue = 0;
  const [count, setCount] = useState(initilvalue);
const incrementfive =()=>{
for (let i = 0; i < 5; i++) {
setCount(previscount => previscount +1)    
}
}
  return (
    <div>
      count:{count}
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
      <button onClick={() => setCount(initilvalue)}>reset</button>
      <button onClick={incrementfive}>incremet 5</button>

    </div>
  );
}

export default Hookcounter2;
