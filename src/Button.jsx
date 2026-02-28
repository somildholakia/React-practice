function doSomething(){
    console.log("Print hello")
}


export default function Button(){
    return(
        <div>
            <button onClick={doSomething}>
                Click Me
            </button>
        </div>
    );
}