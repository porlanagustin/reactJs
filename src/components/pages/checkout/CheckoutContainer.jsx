import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutContainer = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
  });

  const funcionDelFormulario = (event) => {
    event.preventDefault();

    console.log(userData);
    // navigate("/");
  };
  const inputFunction = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={funcionDelFormulario}>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          name="name"
          onChange={inputFunction}
        />
        <input
          type="text"
          placeholder="Ingrese su apellido"
          name="lastName"
          onChange={inputFunction}
        />
        <button type="submit">Enviar</button>
        <button type="button">Cancelar</button>
      </form>
    </div>
  );
};

export default CheckoutContainer;
