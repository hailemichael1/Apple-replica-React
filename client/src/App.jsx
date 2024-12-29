import React from "react";

import { Route, Routes } from "react-router-dom";

// BrowserRouter
// To add the ability to add routing functionality

// Route
// Renders components based on the URL

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Home/Main";
import Iphone from "./Pages/Iphone/iphone";
import Mac from "./Pages/Mac/Mac";
import NotFound from "./Pages/NotFound/NotFound";
import Productpage from "./Pages/Productpage/SingleAppleProduct";
import "./css/styles.css";
import SharedLayout from "./Components/SharedLayout/sharedLayout";
import Search from "./Pages/Search/search";
import Tv from "./Pages/tv/Tv";
import Watch from "./Pages/watch/watch";
import Cart from "./Pages/cart/Cart";
import Support from "./Pages/support/Support";
import Music from "./Pages/music/Music";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/mac" element={<Mac />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/ipad" element={<Iphone />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/music" element={<Music />} />
          <Route path="/support" element={<Support />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/iphone/:pid" element={<Productpage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
