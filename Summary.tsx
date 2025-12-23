import { useAppSelector } from "../app/hooks";
import { products } from "../features/products/products";
import { calculateSavings } from "../features/basket/offerUtils";

export default function Summary() {
  const basket = useAppSelector(s => s.basket.items);

  const subtotal = Object.entries(basket).reduce((sum, [id, qty]) => {
    const price = products.find(p => p.id === id)?.price || 0;
    return sum + price * qty;
  }, 0);

  const { savings, applied } = calculateSavings(basket, products);

  return (
    <div className="p-4 border-t">
      <p>Subtotal: £{subtotal.toFixed(2)}</p>
      {applied.map(a => (
        <p key={a} className="text-red-500">{a}</p>
      ))}
      <p className="font-bold">
        Total: £{(subtotal - savings).toFixed(2)}
      </p>
    </div>
  );
}
