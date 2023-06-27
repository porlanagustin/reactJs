import { useState } from "react";
import Home from "./Home";

const HomeContainer = () => {
  const [contador, setContador] = useState(0);
  const [greeting, setStatusGreeting] = useState("Hola");
  const userName = "Usuario";
  return (
    <Home
      greeting={greeting}
      userName={userName}
      setStatusGreeting={setStatusGreeting}
      contador={contador}
      setContador={setContador}
    ></Home>
  );
};

export default HomeContainer;
