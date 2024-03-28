import { useNavigate } from "react-router-dom"
const Error = () => {
    const navigate = useNavigate()
    const GoHome = () => {
        navigate('/')
    }
    return(
        <div>
            <p>We were unable to find the webpage you were looking for</p>
            <button onClick={GoHome}>Click to return home</button>
        </div>
    )
}

export default Error