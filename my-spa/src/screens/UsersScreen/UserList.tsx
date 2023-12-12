/* eslint-disable */
import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const styles = {
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  } as React.CSSProperties,
  containerButtons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    gap: "10px",
  } as React.CSSProperties,
};

interface User {
  id: number;
  name: string;
}

const UserList: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jean Doe" },
    { id: 3, name: "Jane Doe" },
    { id: 4, name: "James Doe" },
    { id: 5, name: "Jamile Doe" },
  ]);
  const [newUserName, setNewUserName] = useState("");
  const [editingUserId, setEditingUserId] = useState<number | null>(null);
  const [editingName, setEditingName] = useState("");

  const handleAddUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newUserName.trim()) {
      alert(t("alertUser"));
      return;
    }

    const newUser = { id: users.length + 1, name: newUserName };
    setUsers([...users, newUser]);
    setNewUserName("");
  };

  const enterEditMode = (user: User) => {
    setEditingUserId(user.id);
    setEditingName(user.name);
  };

  const saveChanges = (id: number) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, name: editingName } : user
      )
    );
    setEditingUserId(null);
    setEditingName("");
  };

  const updateUser = (id: number, newName: string) => {
    setUsers(
      users.map((user) => (user.id === id ? { ...user, name: newName } : user))
    );
    setEditingUserId(null); // Salir del modo de edición
  };

  const deleteUser = async (userId: number) => {
    // Update the status of the user list without the id removed
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <div>
      <form onSubmit={handleAddUser}>
        <h1>{t("userList")}</h1>
        <div style={styles.containerButtons}>
          <button
            style={styles.button}
            type="button"
            onClick={() => navigate("/")}
          >
            {t("messageGoBack")}
          </button>
          <button style={styles.button} type="submit">
            {t("addUser")}
          </button>
          <input
            type="text"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
            placeholder={t("typeName")}
          />
        </div>
      </form>
      <ul>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: "10px" }}>
            {editingUserId === user.id ? (
              <>
                <input
                  type="text"
                  value={editingName}
                  onChange={(e) => setEditingName(e.target.value)}
                  style={{ marginRight: "10px" }}
                />
                <button
                  onClick={() => saveChanges(user.id)}
                  style={{ marginRight: "10px" }}
                >
                  {t("save")}
                </button>
              </>
            ) : (
              <>
                <Link to={`/users/${user.id}`} style={{ marginRight: "10px" }}>
                  {user.name}
                </Link>
                <button
                  onClick={() => enterEditMode(user)}
                  style={{ marginRight: "10px" }}
                >
                  {t("edit")}
                </button>
                <button onClick={() => deleteUser(user.id)}>
                  {t("remove")}
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
