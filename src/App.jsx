import "./App.css"
import Title from "./product";

function App() {

   let features = ["Nice height, good coding,logic solver"];
  return ( <>
    <Title name="Somil" age="19" year="SYCS" features={features} /> 
    <Title name="ritik" age="99" year="FYCS"/>
    <Title name="krishna" age="39" year="TYCS"/>
</>
  );

}

export default App
