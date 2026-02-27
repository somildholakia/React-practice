import "./App.css"
import Products from "./product";

function App(){
  return (
    <div>
      <Products user="Somil" colors="Red"/>
            <Products user="Krishna" colors="yellow"/>
          <Products user="Ritik" colors="teal"/>

    </div>
  );
}

export default App;