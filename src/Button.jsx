function doSomething() {
    console.log("Print hello")
}

function MouseOver(){
    console.log("Mouse Over the Text.")
}

function HandleDoubleClick(){
    console.log("Doubled Clicked")
}

export default function Button() {
    return (
        <div>
            <button onClick={doSomething}>
                Click Me
            </button>

            <p onMouseOver={MouseOver}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Fugiat molestiae a quidem quae, blanditiis neque, vel quia minima
                  animi amet quam, hic ipsa cumque sunt praesentium earum perferendis 
                  similique odit.</p>

            <button onDoubleClick={HandleDoubleClick}>
                Double Click Here
            </button>
        </div>
    );
}

