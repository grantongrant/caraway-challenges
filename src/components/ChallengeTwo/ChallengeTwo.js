import "./ChallengeTwo.css";

const ChallengeTwo = ({challenges}) => {
    return (
        <>
        {challenges &&
        <div className="input-container">
            <div className="wrapper">
                <input className="input email"type="email" placeholder=" "/>
                <span className="label">Email Address</span>
            </div>
            <div className="wrapper">
                <input className="input password" type="password" placeholder=" "/>
                <span className="label">Password</span>
            </div>
        </div>}
        </>
    )
}

export default ChallengeTwo;