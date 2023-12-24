function App() {
  return (
    <>
      <center className="todo-contaner ">
        <h1>Todo-App</h1>
        <div class="container text-center">
          <div class="row">
            <div class="col-sm-4">
              <input placeholder="Enter Todo here"></input>
            </div>
            <div class="col-sm-4"><input type="date"></input></div>
            <div class="col-sm-2"><button type="button" class="btn btn-success">Add</button></div>
          </div>
        </div>
      </center>
    </>
  );
}
export default App;
