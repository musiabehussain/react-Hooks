import React, { useState } from "react";

function HookCounter3() {
  const [name, setName] = useState({ firsrName: "", lasteNmae: "" });
  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firsrName}
          onChange={(e) => setName({...name, firsrName: e.target.value })}
        />
        <input
          type="text"   
          value={name.lasteNmae}
          onChange={(e) => setName({...name, lasteNmae: e.target.value })}
        />
        <h2> your FirstNmae is {name.firsrName}</h2>
        <h2> your LastName is {name.lasteNmae}</h2>
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  );
}

export default HookCounter3;
