import { Product } from "../products/products";

export const calculateSavings = (
  basket: Record<string, number>,
  products: Product[]
) => {
  let savings = 0;
  const applied: string[] = [];

  const price = (id: string) =>
    products.find(p => p.id === id)?.price || 0;

  // Cheese BOGO
  const cheeseQty = basket.cheese || 0;
  const freeCheese = Math.floor(cheeseQty / 2);
  if (freeCheese > 0) {
    const save = freeCheese * price("cheese");
    savings += save;
    applied.push(`Cheese BOGO: -£${save.toFixed(2)}`);
  }

  // Soup + Bread 50% off
  const soupQty = basket.soup || 0;
  const breadQty = basket.bread || 0;
  const discountedBread = Math.min(soupQty, breadQty);
  if (discountedBread > 0) {
    const save = discountedBread * price("bread") * 0.5;
    savings += save;
    applied.push(`Soup & Bread: -£${save.toFixed(2)}`);
  }

  // Butter 1/3 off
  const butterQty = basket.butter || 0;
  if (butterQty > 0) {
    const save = butterQty * price("butter") / 3;
    savings += save;
    applied.push(`Butter 1/3 off: -£${save.toFixed(2)}`);
  }

  return { savings, applied };
};
