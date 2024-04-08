import Converter from "./Converter"

const Home = () => {
    return(
        <div className="background">
            <p>Welcome to our currency conversion website.</p>
            <p>The goal of this Website is to make currency conversion simple and easy for the average user.</p>
            <br/>
            <Converter/>
        </div>
    )
}

export default Home