import Product from "./pages/Product";
import { obj } from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import { Provider } from "react-redux";

import "./App.css";
import ImageSlider from "./components/BriancoDex_Slider";
import { BriancoDex_SliderData as SliderData } from "./data/data";

import FunctionContextComponent from "./kyle/context/FunctionContextComponent";
import { ThemeProvider } from "./kyle/context/ThemeContext";

const Home = obj.Home;

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      

      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>
      {/* <ImageSlider slides={SliderData} /> */}
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/products/:category'>
            <ProductList />
          </Route>
          <Route path='/product/:id'>
            <Product />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path='/success'>
            <Success />
          </Route>
          <Route path='/login'>{user ? <Redirect to='/' /> : <Login />}</Route>
          <Route path='/register'>
            {user ? <Redirect to='/' /> : <Register />}
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
