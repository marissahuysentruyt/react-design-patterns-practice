import { withEditableResource } from "./withEditableResource";

export const ResourceInfoForm = withEditableResource(({ product, onChangeProduct, onSaveProduct, onResetProduct }) => {
  const { name, price, rating } = product || {};

  return product ? (
    <>
      <label>
        Name:
        <input value={name} onChange={(e) => onChangeProduct({ name: e.target.value})} />
      </label>
      <label>
        Price:
        <input value={price} onChange={(e) => onChangeProduct({ price: e.target.value })} />
      </label>
      <label>
        Rating:
        <input value={rating} onChange={(e) => onChangeProduct({ rating: Number(e.target.value)})} />
      </label>

      <button onClick={onResetProduct}>Reset</button>
      <button onClick={onSaveProduct}>Save Your Changes</button>

    </>
   ) : 
    <p>Loading...</p>;
}, "/products/2345", "product")
