import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import StateProvider from "./StateProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StateProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StateProvider>,
  rootElement
);
