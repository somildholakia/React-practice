import "./App.css"
// import Products from "./product";
import AmazonCards from "./Amazon";
import Button from "./Button";
import Form from "./Form";

function App() {
  return (
    <div>
      {/* <div>
        <Products user="Somil" colors="Red" />
        <Products user="Krishna" colors="yellow" />
        <Products user="Ritik" colors="teal" />
      </div> */}

      <div>
                    <h1>Blockbuster Deals | Shop Now</h1>

        <AmazonCards Title="Logitech MX Master" des1="8000 DPI" des2=" Programmable Buttons"  idx={0}/>
        <AmazonCards Title="Apple pencil gen 3" des1="innovative " des2="New look"  idx={1}/>

        <AmazonCards Title="Acer Aspire 4" des1="Amazing display" des2="Colorfull Display" idx={2}/>

        <AmazonCards Title="Boat 121v2" des1="Huge BAttery" des2="Noise Cancellation" idx={3}/>
        <Button />
        <Form />

      </div>

    </div>

  );
}

export default App;