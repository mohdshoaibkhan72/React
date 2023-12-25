import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
function App() {
  const itemlist = [
    "Dal",
    "green Vegitable",
    "kaju badam",
    "soyabeen",
    "aur bhi bhut sare",
  ];

  //isase loop chala kr kaam kr skte hy isme bar bar list
  //nhi bnani pdti
  return (
    <React.Fragment>
      <h1>Helth item list </h1>
      <ul className="list-group">
        {itemlist.map((item) => (
          <li className="list-group-item">{item}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default App;
