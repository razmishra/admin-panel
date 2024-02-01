import Home from "./Pages/Home/Home";
import "./Pages/Home/home.scss";
import { Route, Routes } from "react-router-dom";
import Finance from "./Pages/Finance/Finance";

const App = ()=> {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/finance" element={<Finance />} />
      </Routes>
    </>
  );
}

export default App;
