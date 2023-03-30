export const ProductInfo = ({ product }) => {
	const { name, price, description, rating } = product || {} ;

	return product ? (
		<>
			<div className="product">
				<h3 className="product__name">{name}</h3>
				<p className="product__price">{price}</p>
				<h3 className="product__description-heading">Description:</h3>
				<p className="product__description-content">{description}</p>
				<p className="product__rating">Average Rating: {rating}</p>
			</div>
		</>
	) : 
	<p>Loading...</p>;
}
