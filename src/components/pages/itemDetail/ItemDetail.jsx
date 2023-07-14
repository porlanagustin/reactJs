import CounterContainer from "../../common/Counter/CounterContainer";

const ItemDetail = ({ product, agregarAlCarrito }) => {
  return (
    <div>
      <div>{product.title}</div>
      <CounterContainer
        stock={product.stock}
        agregarAlCarrito={agregarAlCarrito}
      ></CounterContainer>
    </div>
  );
};

export default ItemDetail;
