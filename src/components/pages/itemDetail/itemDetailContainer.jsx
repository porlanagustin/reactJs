import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { products } from "../../../productsMock";
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  let { id } = useParams();

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
      quiantity: cantidad,
    };
    console.log(data);
  };
  return (
    <ItemDetail
      product={product}
      agregarAlCarrito={agregarAlCarrito}
    ></ItemDetail>
  );
};

export default ItemDetailContainer;
