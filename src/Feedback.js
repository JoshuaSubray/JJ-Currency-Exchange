import { useState } from "react"
const Feedback = () => {
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const Submit = (event) => {
        event.preventDefault()
        console.log(Name);
    }
    return(
        <div>
            <form>
                <label>Enter your full name</label><br/>
                <input type="text" value={Name} onChange={(event) => {setName(event.target.value)}}></input><br/>
                <label>Enter you email</label><br/>
                <input type="text"></input><br/>
                <label>Enter your feedback</label><br/>
                <input type="text"></input><br/>
                <button onClick={Submit}>Submit</button>
            </form>
        </div>
    )
}

export default Feedback