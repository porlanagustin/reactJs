import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./cartContainer.css";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);
  let totalPrice = getTotalPrice();

  return (
    <div className="container">
      {cart.length > 0 ? (
        <Card className="card">
          <Typography gutterBottom variant="h6" component="div">
            Carrito de compras
          </Typography>
          <Divider></Divider>

          {cart.map((el) => (
            <CardContent key={el.id} className="card-content">
              <img src={el.img} alt={el.title} className="card-image" />
              <Typography
                variant="h2"
                color="text.secondary"
                style={{ marginBottom: "8px" }}
              >
                {el.title}
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                style={{ marginBottom: "16px" }}
              >
                Precio: ${el.price}
              </Typography>
              <Button onClick={() => deleteById(el.id)}>
                Eliminar producto
              </Button>
            </CardContent>
          ))}

          <Typography style={{ border: "1px solid #ccc", padding: "16px" }}>
            Precio Final: {totalPrice}
          </Typography>
          <CardActions
            style={{
              marginTop: "50px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button onClick={clearCart} variant="contained" color="error">
              Limpiar Carrito
            </Button>
            <Button variant="contained" color="success">
              Terminar Compra
            </Button>
          </CardActions>
        </Card>
      ) : (
        <Card className="card">
          <CardContent className="card-content">
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              className="empty-cart-message"
            >
              Carrito Vacio
            </Typography>
            <img src="../../empty-cart.png" alt="" className="card-image" />
            <Button variant="contained">
              <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                Volver Atras
              </Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CartContainer;
