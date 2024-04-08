import { useNavigate } from "react-router-dom"
const Error = () => {
    const navigate = useNavigate()
    const GoHome = () => {
        navigate('/')
    }
    
    return(
        <div className="background">
            <h2>ERROR: The page you requested could not be found.</h2>
            <button onClick={GoHome}>Return home.</button>
        </div>
    )
}

export default Error