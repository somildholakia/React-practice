import "./Price.css";

export default function Price({oldPrices,newPrices}){
    return (
        <div className="styles">
            <span className="line1">{oldPrices}</span>
            &ensp; &ensp;
            <span className="line2">{newPrices}</span>
        </div>
    );
}