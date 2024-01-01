import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
function App() {
  //const itemlist=[]
  const itemlist = [
    "Dal",
    "green Vegitable",
    "kaju badam",
    "soyabeen",
    "aur bhi bhut sare",
  ];
// itw work when the arrys is empty 
  if (itemlist == 0) {
    return <>i am so bhokha </>;
    
  }
  //isase loop chala kr kaam kr skte hy isme bar bar list
  //nhi bnani pdti
  return (
    <React.Fragment>
      <h1>Helth item list </h1>
    {itemlist.length===0 && <h2>i am also bhoka 2 </h2>}
      <ul className="list-group">
        {itemlist.map((item) => (
          <li className="list-group-item">{item}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default App;
