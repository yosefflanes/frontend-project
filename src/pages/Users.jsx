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
    <>
      <div className="border border-gray-400 p-2 flex flex-col">
        <div className="py-10 text-center">
          <h1 className="font-bold text-2xl text-primary">User Management</h1>
          <p className="text-sm text-secondary">You can only view all users and user details</p>
        </div>

        {loading && <p>Memuat data user...</p>}
        {error && <p className="text-red-600 text-sm">{error}</p>}

        {!loading && !error && (
          <table className="text-primary text-center border border-gray-300">
            <thead className="bg-background">
              <tr>
                <th className="py-4 md:px-6">ID</th>
                <th>NAMA</th>
                <th>EMAIL</th>
                <th>ROLE</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr
                  key={u.id}
                  className="transition-colors duration-150 odd:bg-white even:bg-blue-400/20"
                >
                  <td className="py-4 px-6">{u.id}</td>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.role}</td>
                  <td>
                    <Link
                      to={`/users/${u.id}`}
                      className="hover:text-indigo-600"
                    >
                      User Detail
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <FooterSection />
    </>
  );
};

export default User;
