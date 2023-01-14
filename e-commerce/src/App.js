import "./App.css";
import { Route, Routes } from "react-router";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Market from "./Pages/Market";
import Profile from "./Pages/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="market" element={<Market />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
