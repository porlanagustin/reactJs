import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navContainer">
      <ul className="containerCategories">
        <li>Inicio</li>
        <li>Contacto</li>
        <li>About</li>
      </ul>
      <h4>WW Producciones</h4>
      <CartWidget></CartWidget>
    </div>
  );
};

export default Navbar;
