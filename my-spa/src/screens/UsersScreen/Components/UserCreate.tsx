import { FormEvent, useState } from "react";

const UserCreate = () => {
  const [userData, setUserData] = useState({ name: "", email: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Llamar a la API para crear el usuario
    // Redirigir a la lista de usuarios o actualizar el estado
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userData.name}
        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        placeholder="Nombre"
      />
      <input
        type="email"
        value={userData.email}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        placeholder="Correo electrónico"
      />
      <button type="submit">Crear Usuario</button>
    </form>
  );
};

export default UserCreate;
