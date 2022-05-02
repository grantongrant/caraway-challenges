import './ChallengeOne.css';

const ChallengeOne = ({challenges}) => {
    return (
        <>
        <p>Challenges</p>
        {challenges && <div className="button-container">
            <button id="add-to-cart">ADD TO CART</button>
        </div>}
        </>
    )
};

export default ChallengeOne;