
import { useState } from "react";
import "./App.css";
function App() {
  const [name, setName] = useState(".....");

  const onchange = (event) => {
    const newchng = event.target.value;
    setName(newchng);
  };
  //on enter the key evensts
  /* const onchange = (event) => {
    if (event.key === 'Enter') {
     const newchng = event.target.value;
    setName(newchng);
    }
  };
  */
  return (
    <>
      <div>
        <center>
          <h1>I am writing here somthings : {name}</h1>
        </center>
        <center>
          <input
            type="input"
            name="username"
            onInput={onchange}
            autofocus="autofocus"
          />
        </center>
      </div>
    </>
  );
}

export default App;
