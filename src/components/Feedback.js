import { useState } from "react"

const Feedback = () => {
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Feedback, setFeedback] = useState('')
    const [Msg, setMsg] = useState('')
    const Submit = (event) => {
        event.preventDefault()
        if(Email == ''){
            alert("You must enter your email")
            setMsg('')
        }
        if(Feedback == ''){
            alert("Feedback field is empty")
            setMsg('')
        }
        else{
            setMsg("Thank you, your feedback has been received")
        }
    }
    return(
        <div>
            <form>
                <label>Enter your name (optional)</label><br/>
                <input type="text" value={Name} onChange={(event) => {setName(event.target.value)}}></input><br/>
                <label>Enter you email</label><br/>
                <input type="text" value={Email} onChange={(event) => {setEmail(event.target.value)}}></input><br/>
                <label>Enter your feedback</label><br/>
                <input type="text" value={Feedback} onChange={(event) => {setFeedback(event.target.value)}}></input><br/>
                <button onClick={Submit}>Submit</button><br/>
                <p>{Msg}</p>
            </form>
        </div>
    )
}

export default Feedback