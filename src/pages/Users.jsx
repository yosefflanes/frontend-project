import { useEffect, useState } from "react";
import { apiRequest } from "../api/client";
import { Link } from "react-router-dom";

const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setErrors] = useState("");

  // Penerapan Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    apiRequest(`/users?page=${currentPage}`)
      .then((res) => {
        if (isMounted) {
          if (res.success && res.data) {
            setUsers(res.data.data || []);
            setCurrentPage(res.data.current_page || 1);
            setTotalPages(res.data.last_page || 1);
          } else {
            setUsers(res.data || res || []);
          }
        }
      })
      .catch((err) => {
        if (isMounted) setErrors(err.message || "Gagal memuat data.");
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [currentPage]);

  if (loading) return <div className="p-8 text-center">Memuat data...</div>;
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>;

  return (
    <>
      <div className="border border-gray-400 p-2 flex flex-col">
        <div className="py-10 text-center">
          <h1 className="font-bold text-2xl text-primary">User Management</h1>
          <p className="text-sm text-secondary">
            You can only view all users and user details
          </p>
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
        {totalPages > 1 && (
          <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 text-xs font-semibold bg-gray-100 text-gray-700 rounded-lg disabled:opacity-40 hover:bg-gray-200 transition-all cursor-pointer disabled:cursor-not-allowed"
            >
              ← Previous
            </button>

            <span className="text-xs text-secondary font-medium">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 text-xs font-semibold bg-[#0f2547] text-white rounded-lg disabled:opacity-40 hover:bg-slate-800 transition-all cursor-pointer disabled:cursor-not-allowed"
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default User;
