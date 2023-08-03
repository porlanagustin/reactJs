import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { products } from "../../../productsMock";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  let { id } = useParams();

  const { addToCart, getQuantityById } = useContext(CartContext);

  let cantidadEnCarrito = getQuantityById(id);

  useEffect(() => {
    let promesa = new Promise((resolve, reject) => {
      let productSelected = products.find(
        (product) => product.id === Number(id)
      );
      resolve(productSelected);
    });

    promesa.then((res) => setProduct(res)).catch((err) => console.log(err));
  }, [id]);

  const agregarAlCarrito = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };
    addToCart(data);
  };
  return (
    <ItemDetail
      product={product}
      agregarAlCarrito={agregarAlCarrito}
      cantidadEnCarrito={cantidadEnCarrito}
    ></ItemDetail>
  );
};

export default ItemDetailContainer;
