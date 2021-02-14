import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import StateProvider from "./StateProvider";
import Checkout from "./Checkout";
import Login from "./Login";
import { useContext, useEffect } from "react";
import { auth } from "./Firebase";
import { Basket } from "./StateProvider";

export default function App() {
  const { user, login } = useContext(Basket);

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((authUser) => {
  //     console.log("THE USER IS >>> ", authUser);
  //     if (authUser) {
  //       console.log("App.js useEffect If");
  //       login(authUser);
  //     } else {
  //       console.log(user);
  //       console.log(authUser);
  //       login(null);
  //     }
  //   });
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);
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
