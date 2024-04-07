import { useParams } from "react-router-dom"

const UserHome = () => {
    const {User} = useParams()
    return(
        <div>
            <h1><b><u>CURRENCY CONVERSION</u></b></h1>
            <p>Welcome back, {User}!</p>
            <p>The goal of this Website is to make currency conversion simple and easy for the average user.</p>
        </div>
    )
}

export default UserHome