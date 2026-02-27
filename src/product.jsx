import "./product.css";

function Products({user,colors}){
  let color = { color: colors}
  return (
    <div style={color}> 

      <h1> Hello {user} </h1>


    </div>
  );
}

export default Products;