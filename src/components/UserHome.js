import { useParams } from "react-router-dom"

const UserHome = () => {
    const {User} = useParams()
    return(
        <div>
            <h1><b><u>WELCOME</u></b></h1>
            <p><b><u>{User}</u></b></p>
        </div>
    )
}

export default UserHome