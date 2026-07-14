import { useEffect, useState } from "react";
import { apiRequest } from "../api/client";
import { Link } from "react-router-dom";
import FooterSection from "../components/FooterSection";

const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setErrors] = useState("");

  useEffect(() => {
    apiRequest("/users")
      .then((res) => setUsers(res.success ? res.data : res))
      .catch((err) => setErrors(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <div>
        <h1 className="font-bold text-2xl text-primary">User Management</h1>
        <p className="text-sm text-secondary">Manage and view all users</p>
      </div>

      {loading && <p>Memuat data user...</p>}
      {error && <p className="text-red-600 text-sm">{error}</p>}

      {!loading && !error && (
        <table className="text-secondary">
          <thead className="bg-background">
            <tr>
              <th>ID</th>
              <th>NAMA</th>
              <th>EMAIL</th>
              <th>ROLE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.nema}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
                <td>
                  <Link to={`/users/${u.id}`}>User Detail</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <FooterSection />
    </div>
  );
};

export default User;
