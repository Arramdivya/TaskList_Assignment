import { products } from "./products";
import { useAppDispatch } from "../../app/hooks";
import { addItem } from "../basket/basketSlice";

export default function ProductList() {
  const dispatch = useAppDispatch();

  return (
    <div className="product-container">
      <h2 className="section-title">Products</h2>

      <div className="product-list">
        {products.map(p => (
          <div key={p.id} className="product-item">
            <span className="product-text">
              {p.name} (£{p.price})
            </span>

            <button
              className="add-btn"
              onClick={() => dispatch(addItem(p.id))}
            >
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
