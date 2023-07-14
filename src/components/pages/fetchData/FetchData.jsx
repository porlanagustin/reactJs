import { useEffect } from "react";
import { useState } from "react";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let data = fetch("https://jsonplaceholder.typicode.com/users");
    data
      .then(() => res.json())
      .then((res) => setUsers(res))
      .catch((err) => console.log(err));
  }, []);

  console.log(users);
  let newUSer = {
    name: "Agustin Porlan",
    username: "porlanagustin",
    email: "ap@april.biz",
    address: {
      street: "Remedios de Escalada",
      suite: "556",
      city: "Rio Ceballos",
      zipcode: "5111",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "3515144695",
    website: "agustinporlan.org",
    company: {
      name: "American Express",
      catchPhrase: "IDN",
      bs: "Concierge",
    },
  };

  const createUser = () => {
    let data = fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        Authorization: "AAA1",
        "Content-Type": "Aplication/json",
      },
      body: JSON.stringify(newUSer),
    });

    data.then((res) => console.log(res)).catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Fetching de Datos</h1>
      <button onClick={createUser}>Crear Usuario</button>
    </div>
  );
};

export default FetchData;
