import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import MainRouter from "./MainRouter.jsx";

const App = () => {
  return (
    <>
      <Router basename="/Portfolio/">
        <MainRouter />
      </Router>
    </>
  );
};

export default App;
