import { Route, Routes } from "react-router-dom";
import Home from "screens/Home";

const Container = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Container;
