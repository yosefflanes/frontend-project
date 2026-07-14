import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { apiRequest } from "../api/client";
import FooterSection from "../components/FooterSection";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    apiRequest(`/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-100 text-sm text-secondary animate-pulse">
        Memuat informasi pengguna...
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto my-8 p-4 bg-red-50 text-red-600 rounded-xl border border-red-100 text-sm text-center">
        {error}
      </div>
    );
  }

  return (
    <>
      <div className="w-full max-w-2xl mx-auto p-4 md:p-8 mb-2">
        {/* Tombol Kembali / Navigasi Atas */}
        <div className="mb-6">
          <Link
            to="/users"
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
          >
            ← Kembali ke User Management
          </Link>
        </div>

        {/* CARD UTAMA USER INFORMATION */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {/* Card Header */}
          <div className="p-6 border-b border-gray-100 bg-gray-50/50">
            <h2 className="text-xl font-bold text-primary tracking-tight">
              User Information
            </h2>
            <p className="text-xs text-secondary mt-0.5">
              Detail data dan profil pengguna pada platform EduPro
            </p>
          </div>

          {/* Card Body - Daftar Informasi */}
          <div className="divide-y divide-gray-100 px-6">
            {/* BARIS 1: USER ID */}
            <div className="py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
              <span className="text-xs font-bold tracking-wider text-secondary uppercase sm:w-1/3">
                User ID
              </span>
              <span className="text-sm font-mono font-bold text-primary sm:w-2/3 sm:text-right">
                {user?.id || id}
              </span>
            </div>

            {/* BARIS 2: FULL NAME */}
            <div className="py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
              <span className="text-xs font-bold tracking-wider text-secondary uppercase sm:w-1/3">
                Full Name
              </span>
              <span className="text-sm font-semibold text-primary sm:w-2/3 sm:text-right">
                {user?.name}
              </span>
            </div>

            {/* BARIS 3: EMAIL ADDRESS */}
            <div className="py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
              <span className="text-xs font-bold tracking-wider text-secondary uppercase sm:w-1/3">
                Email Address
              </span>
              <span className="text-sm text-secondary break-all sm:w-2/3 sm:text-right">
                {user?.email}
              </span>
            </div>

            {/* BARIS 4: ROLE */}
            <div className="py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
              <span className="text-xs font-bold tracking-wider text-secondary uppercase sm:w-1/3">
                Role
              </span>
              <div className="sm:w-2/3 sm:text-right">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium capitalize border ${
                    user?.role === "instructor"
                      ? "bg-blue-50 text-blue-700 border-blue-100"
                      : "bg-slate-100 text-slate-700 border-slate-200"
                  }`}
                >
                  {user?.role}
                </span>
              </div>
            </div>

            {/* BARIS 5: STATUS */}
            <div className="py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
              <span className="text-xs font-bold tracking-wider text-secondary uppercase sm:w-1/3">
                Status
              </span>
              <div className="sm:w-2/3 sm:text-right">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-600 bg-green-50/60 border border-green-100 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default UserDetail;
