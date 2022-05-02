import "./ProductCard.css";

const ProductCard = ({product}) => {
    return (
        <li className = "card" key={product.id}>{product.title}</li>
    )
}

export default ProductCard;
