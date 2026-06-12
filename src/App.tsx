import RootRouter from "./components/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <RootRouter />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;