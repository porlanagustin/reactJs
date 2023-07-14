import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navContainer">
        <ul className="containerCategories">
          <Link to="/">Todas</Link>
          <Link to="/category/deportivas">Deportivas</Link>
          <Link to="/category/urbanas">Urbanas</Link>
        </ul>
        <Link to="/">
          <img src="../../logo.png" style={{ maxWidth: "100px" }} />
        </Link>
        <CartWidget></CartWidget>
      </div>
    </div>
  );
};

export default Navbar;
