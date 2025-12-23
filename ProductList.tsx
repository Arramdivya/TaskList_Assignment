import { products } from "../features/products/products";
import { useAppDispatch } from "../app/hooks";
import { addItem } from "../features/basket/basketSlice";

export default function ProductList() {
  const dispatch = useAppDispatch();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Products</h2>
      {products.map(p => (
        <div key={p.id} className="flex justify-between mt-2">
          <span>{p.name} (£{p.price})</span>
          <button
            className="bg-blue-500 text-white px-2"
            onClick={() => dispatch(addItem(p.id))}
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
}
