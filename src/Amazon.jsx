import "./Amazon.css";
import Price from "./Price";

function AmazonCards({Title,des1,des2,idx}){
    let oldPrices = ["12,495","11,900","1,599","599"];
    let newPrices = ["8,999","9,199","899","278"];
    return (
        <div className="Cards">
           <h2> {Title} </h2>
           <p> {des1} </p>
           <p>{des2} </p>
           <Price oldPrices={oldPrices[idx]} newPrices={newPrices[idx]}/>
        </div>
    );

}

export default AmazonCards;