import ItemList from "./ItemList";
import { products } from "../../../productsMock";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingWeb from "../../common/loadingWeb/LoadingWeb";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let productosFiltrados = products.filter(
      (product) => product.category === categoryName
    );

    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categoryName ? productosFiltrados : products);
      }, 4000);
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((error) => console.log(error));
  }, [categoryName]);

  if (items.length == 0) {
    return (
      <>
        <LoadingWeb></LoadingWeb>
      </>
    );
  }

  return (
    <div>
      <ItemList items={items}></ItemList>
    </div>
  );
};

export default ItemListContainer;
