const Home = ({
  greeting,
  userName,
  setStatusGreeting,
  contador,
  setContador,
}) => {
  return (
    <div style={{ padding: "0 20px" }}>
      <h1>
        {greeting} {userName}
      </h1>
      <button onClick={() => setStatusGreeting("Chau")}>Salir</button>
      <h2>{contador}</h2>
      <button onClick={() => setContador(contador + 1)}>Sumar</button>
    </div>
  );
};

export default Home;
