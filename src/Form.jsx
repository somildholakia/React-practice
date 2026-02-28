function handleFormSubmit(event){
    console.log("Form was submitted")
    event.preventDefault()
    console.log(event)
}


export default function Form(){
    return (
        <div>
            <form>
                <input placeholder="Write Something" />
                <button onClick={handleFormSubmit}>Submit</button>
                
            </form>
        </div>
    );
}