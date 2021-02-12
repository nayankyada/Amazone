import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
export default function App() {
  return (
    <Switch>
      <Route path="/checkout">
        {}
        <h1>Checkout</h1>
      </Route>
      <Route path="/login">
        <h1>login</h1>
      </Route>
      <Route path="/">
        <Header />
      </Route>
    </Switch>
  );
}
