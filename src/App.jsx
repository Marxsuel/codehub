import { useContext } from "react";
import { RoutesMain } from "./Routes/RoutesMain";
import { RegisterModal } from "./components/RegisterModal";
import { TechContext } from "./providers/TechContext";
import "./styles/App.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  const { isVisible } = useContext(TechContext);
  return (
    <>
      <RoutesMain />
      <ToastContainer />
    </>
  );
}

export default App;
