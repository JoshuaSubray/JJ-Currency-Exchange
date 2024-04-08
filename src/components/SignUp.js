import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SignUp = () => {
    const navigate = useNavigate()
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState ('')
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    const [RePassword, setRePassword] = useState('')
    const [msg, setMsg] = useState('')
    const Submit = (event) => {
        event.preventDefault()
        if(Email == ''){
            alert('Invalid email.')
            return
        }
        if(Username == '' || Username.length < 3){
            if(Username.length == ''){
                alert("Invalid username.")
                return
            }
            else if(Username.length < 3){
                alert("Invalid username. Please enter a username that is at least 3 characters long.")
                return
            }
        }
        if(Password == '' || Password.length < 7){
            if(Password == ''){
                alert("Invalid password.")
                return
            }
            else if(Password.length < 7){
                alert("Password not secure. Please enter a Password that is at least 7 characters long.")
                return
            }
        }
        else if(Password !== RePassword){
            alert('Invalid re-entry. The password entered does not match original password.')
            return
        }
        else{
            setMsg('You have successfully created an account! Returning to home page.')
            setTimeout((User) => {
                navigate(`/user/${Username}`)
            }, 2000);
        }
    }
    return(
        <div className="background">
            <form>
                <label>Enter your name (optional)</label><br/>
                <input type="text" value={Name} onChange={(event) => {setName(event.target.value)}}></input><br/>
                <label>Enter your email</label><br/>
                <input type="text" value={Email} onChange={(event) => {setEmail(event.target.value)}}></input><br/>
                <label>Enter your username</label><br/>
                <input type="text" value={Username} onChange={(event) => {setUsername(event.target.value)}}></input><br/>
                <label>Enter your password</label><br/>
                <input type="password" value={Password} onChange={(event) => {setPassword(event.target.value)}}></input><br/>
                <label>Re-enter your password</label><br/>
                <input type="password" value={RePassword} onChange={(event) => {setRePassword(event.target.value)}}></input><br/>
                <button onClick={Submit}>Sign up</button><br/>
                <p style={{color: 'green'}}>{msg}</p>
            </form>
        </div>
    )
}

export default SignUp