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

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);
  let totalPrice = getTotalPrice();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <Card
        sx={{
          minWidth: 500,
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "20px",
          width: "fit-content",
        }}
      >
        <Typography gutterBottom variant="h6" component="div">
          Carrito de compras
        </Typography>
        <Divider></Divider>

        {cart.map((el) => (
          <CardContent
            key={el.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid #ccc",
              padding: "16px",
            }}
          >
            <img
              src={el.img}
              alt={el.title}
              style={{
                width: "200px",
                height: "200px",
                marginBottom: "16px",
              }}
            />
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
            <Button onClick={() => deleteById(el.id)}>Eliminar producto</Button>
          </CardContent>
        ))}

        <Typography style={{ border: "1px solid #ccc", padding: "16px" }}>
          Precio Final: {totalPrice}
        </Typography>
        {cart.length > 0 ? (
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
        ) : (
          <Button variant="contained" style={{ marginTop: "15px" }}>
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              Volver Atras
            </Link>
          </Button>
        )}
      </Card>
    </div>
  );
};

export default CartContainer;
