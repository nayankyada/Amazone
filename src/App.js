import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import StateProvider from "./StateProvider";
import Checkout from "./Checkout";
import Login from "./Login";
export default function App() {
  return (
    <StateProvider>
      <Switch>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/login">
          <Header />
          <Login />
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </StateProvider>
  );
}
