import "./ChallengeTwo.css";

const ChallengeTwo = ({challenges}) => {
    return (
        <>
        {challenges &&
        <div className="input-container">
            <div className="wrapper">
                <input className="input"type="email"></input>
                <span className="label">Email Address</span>
            </div>
            <div className="wrapper">
                <input className="input" type="password"/>
                <span className="label">Password</span>
            </div>
        </div>}
        </>
    )
}

export default ChallengeTwo;