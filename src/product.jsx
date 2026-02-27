import "./product.css";

function Title({name,age,year,features }){
  // console.log(features)
  return (
    <div className="hello1">
      <h1>MY name is: {name}</h1>
      <p>My age is: {age} </p>

      <h2>My year is: {year}</h2>
     <p>{features}</p>
    </div>
  );
}



export default Title;