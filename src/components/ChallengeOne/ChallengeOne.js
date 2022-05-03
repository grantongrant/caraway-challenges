import './ChallengeOne.css';

const ChallengeOne = ({challenges}) => {
    return (
        <>
        {challenges && 
            <>
            <p className="category-title challenge">Challenges</p>
            <div className="button-container">
                <button id="add-to-cart">ADD TO CART</button>
            </div>
            </>}
        </>
    )
};

export default ChallengeOne;