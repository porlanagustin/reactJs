import ItemList from "./ItemList";
import { products } from "../../../productsMock";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();
  console.log(categoryName);

  useEffect(() => {
    let productosFiltrados = products.filter(
      (product) => product.category === categoryName
    );
    const tarea = new Promise((resolve, reject) => {
      resolve(categoryName ? productosFiltrados : products);
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((error) => console.log(error));
  }, [categoryName]);

  return (
    <div>
      <ItemList items={items}></ItemList>
    </div>
  );
};

export default ItemListContainer;
