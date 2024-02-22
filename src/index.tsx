import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.scss";
import "./config/senity";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);
