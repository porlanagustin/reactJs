import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div>
      <Link to="/cart" style={{ color: "black" }}>
        <Badge badgeContent={4} color="primary">
          <ShoppingCartIcon
            color="main"
            sx={{ fontSize: 40 }}
          ></ShoppingCartIcon>
        </Badge>
      </Link>
    </div>
  );
};

export default CartWidget;
