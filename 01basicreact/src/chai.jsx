 function Chai() {
  
  let number= Math.random() *100;
  
  return <>
  <h1 style={{'background-color': '#f1f1f1'}}
    > The number is {Math.round(number)}</h1>
</>
}
export default Chai;
