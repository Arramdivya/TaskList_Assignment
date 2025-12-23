import ProductList from "./features/products/ProductsList";
import Summary from "./components/Summary";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1 className="title">Shopping Basket</h1>

      <div className="row">
        <div className="panel">
          <ProductList />
        </div>

        <div className="panel">
          <Summary />
        </div>
      </div>
    </div>
  );
};

export default App;
