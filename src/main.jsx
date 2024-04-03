import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
if (window.location.pathname === "/photo/") {
  window.location.replace("/photo/#/gallery");
}
