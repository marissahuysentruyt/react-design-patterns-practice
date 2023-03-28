import { useResource } from "./useResource";

export const ProductInfo = ({ resourceId }) => {
  const product = useResource(`/products/${resourceId}`);
	const { name, price, rating, description } = product || {};

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
	): 
	<p>Loading...</p>;
}
