import { useState } from "react";

import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");

  async function submit() {
    console.log(setEmail);
    console.log(setPasword);
  }

  return (
    <>
      <form className="form" action="post">
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => {
              setPasword(e.target.value);
            }}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={submit}>
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
