import "./product.css";

function Title({name,age,year }){
  return (
    <div className="hello1">
      <h1>MY name is: {name}</h1>
      <p>My age is: {age} </p>

      <h2>My year is: {year}</h2>
     

    </div>
  );
}



export default Title;