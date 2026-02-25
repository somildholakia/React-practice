import "./App.css"

function Title(){
  return (
    <div>
      <h1>I am the Title!</h1>
      <p>This is a Title Component</p>
    </div>
  );
}

function Description (){
  return (

    <div>
      <h2>HEllo my name is Somil</h2>
      <p>This is a description Component</p>
    </div>

  );
}

function App() {

  return (

    <div>
      <h1>This is my App Component</h1>
      <Title />
      <Description />
    </div>

  );

}

export default App
