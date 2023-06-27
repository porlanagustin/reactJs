import Navbar from "./components/layout/navbar/Navbar";
import { useState } from "react";
import HomeContainer from "./components/pages/Home/HomeContainer";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import Footer from "./components/layout/footer/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <HomeContainer></HomeContainer>
      <ItemListContainer></ItemListContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
