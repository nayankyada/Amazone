import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
export default function App() {
  return (
    <Switch>
      <Route path="/checkout">
        <Header />
        <h1>Checkout</h1>
      </Route>
      <Route path="/login">
        <Header />
        <h1>login</h1>
      </Route>
      <Route path="/">
        <Header />
        <Home />
      </Route>
    </Switch>
  );
}
