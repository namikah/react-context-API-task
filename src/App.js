import "./App.css";
import ProductDetails from "./pages/productDetail/ProductDetails";
import Navi from "./components/layouts/header/Navi";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import { Redirect } from "react-router-dom";
import Footer from "./components/layouts/footer/Footer";
import { ProductsProvider } from "./context/Products";
import Login from "./pages/login/Login";
import CreateProducts from "./pages/createProduct/CreateProducts";
import { LoadingProvider } from "./context/loading/";

function App() {
  return (
    <div className="App">
      <LoadingProvider>
        <ProductsProvider>
          <Navi />
          <Switch>
            <Route path={"/"} exact component={Home} />
            <Route path={"/products"} exact component={Products} />
            <Route path={"/productDetail"} exact component={ProductDetails} />
            <Route path={"/login"} exact component={Login} />
            <Route path={"/createProducts"} exact component={CreateProducts} />
            <Redirect to={"/error"} />
          </Switch>
          <Footer />
        </ProductsProvider>
      </LoadingProvider>
    </div>
  );
}

export default App;
