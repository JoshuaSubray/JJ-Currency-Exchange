import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SignIn = () => {
    const navigate = useNavigate()
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    const [msg, setMsg] = useState('')
    const Submit = (event) => {
        event.preventDefault()
        if(Username == '' || Username.length < 3){
            alert("Invalid username.")
            return
        }
        if(Password == '' || Password.length < 7){
            alert("Invalid password.")
            return
        }
        else{
            setMsg('You have successfully signed in Returning you to the home page')
            setTimeout((User) => {
                navigate(`/user/${Username}`)
            }, 2000);
        }
    }
    return(
        <div>
            <form>
                <label>Username</label><br/>
                <input type="text" value={Username} onChange={(event) => {setUsername(event.target.value)}}></input><br/>
                <label>Password</label><br/>
                <input type="password" value={Password} onChange={(event) => {setPassword(event.target.value)}}></input><br/>
                <button onClick={Submit}>Sign in</button><br/>
                <p style={{color: 'green'}}>{msg}</p>
            </form>
        </div>
    )
}

export default SignIn