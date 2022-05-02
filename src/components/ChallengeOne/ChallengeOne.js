import './ChallengeOne.css';

const ChallengeOne = ({challenges}) => {
    return (
        <>
        {challenges && <div className="button-container">
            <button id="add-to-cart">ADD TO CART</button>
        </div>}
        </>
    )
};

export default ChallengeOne;