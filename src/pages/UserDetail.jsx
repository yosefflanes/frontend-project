import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { apiRequest } from "../api/client";

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Logic Modal
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", role: "" });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    apiRequest(`/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  const openModal = () => {
    if (user) {
      setForm({
        name: user.name || "",
        email: user.email || "",
        role: user.role || "",
      });
    }
    setIsOpen(true);
  };

  // MENANGANI PENUTUPAN MODAL DENGAN TOMBOL ESC
  useEffect(() => {
    const handlekeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) window.addEventListener("keydown", handlekeyDown);
    return () => window.removeEventListener("keydown", handlekeyDown);
  }, [isOpen]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // =================================================
  // LOGIKA AKSI: UPDATE & DELETE
  // =================================================

  // UPDATE
  const handleUpdate = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await apiRequest(`/users/${id}`, {
        method: "POST",
        body: form,
      });
      setUser(res.data);
      setIsOpen(false);
      alert("Data berhasil diperbarui!");
    } catch (err) {
      alert(err.message || "Gagal memperbarui data");
    } finally {
      setSubmitting(false);
    }
  };

  // DELETE
  const handleDelete = async () => {
    if (
      window.confirm(
        "Apakah Anda yakin ingin menghapus pengguna ini secara permanen?",
      )
    ) {
      setSubmitting(true);
      try {
        await apiRequest(`/users/${id}`, { method: "DELETE" });
        setIsOpen(false);
        alert("Pengguna berhasil dihapus!");
        navigate("/users");
      } catch (err) {
        alert(err.message || "Gagal menghapus pengguna");
      } finally {
        setSubmitting(false);
      }
    }
  };

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
      <div className="w-full max-w-2xl mx-auto p-4 md:p-8 mt-14">
        {/* Tombol Kembali / Navigasi Atas */}
        <div className="mb-6">
          <Link
            to="/users"
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
          >
            ← Kembali ke Manajemen Pengguna
          </Link>
        </div>

        {/* CARD UTAMA USER INFORMATION */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {/* Card Header */}
          <div className="p-6 border-b border-gray-100 bg-gray-50/50">
            <h2 className="text-xl font-bold text-primary">
              Informasi Pengguna
            </h2>
            <p className="text-xs text-secondary mt-0.5">
              Detail data dan profil pengguna pada platform EduPro
            </p>
          </div>

          {/* Tombol kelola pengguna */}
          <button
            onClick={openModal}
            className="px-4 py2 bg-primary hover:bg-slate-800 text-white rounded-xl text-xs font-semibold cursor-pointer"
          >
            Kelola Pengguna
          </button>

          {/* Daftar Informasi */}
          <div className="divide-y divide-gray-100 px-6">
            {/* USER ID */}
            <div className="py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
              <span className="text-xs font-bold tracking-wider text-secondary uppercase sm:w-1/3">
                ID Pengguna
              </span>
              <span className="text-sm font-mono font-bold text-primary sm:w-2/3 sm:text-right">
                {user?.id || id}
              </span>
            </div>

            {/* FULL NAME */}
            <div className="py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
              <span className="text-xs font-bold tracking-wider text-secondary uppercase sm:w-1/3">
                Nama Lengkap
              </span>
              <span className="text-sm font-semibold text-primary sm:w-2/3 sm:text-right">
                {user?.name}
              </span>
            </div>

            {/* EMAIL ADDRESS */}
            <div className="py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
              <span className="text-xs font-bold tracking-wider text-secondary uppercase sm:w-1/3">
                Alamat Email
              </span>
              <span className="text-sm text-secondary break-all sm:w-2/3 sm:text-right">
                {user?.email}
              </span>
            </div>

            {/* ROLE */}
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
          </div>
        </div>
      </div>
      {/* MODAL */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-xs"
          onClick={() => setIsOpen(false)}
        >
          {/* Box Konten Modal (Ditambahkan e.stopPropagation agar saat input di klik, modal tidak tertutup otomatis) */}
          <div
            className="bg-white w-full max-w-md rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-5 border-b border-b-gray-100 flex justify-between items-center bg-gray-50">
              <h3 className="text-base font-bold text-gray-900">
                Hapus Pengguna
              </h3>
            </div>
            <form onSubmit={handleUpdate} className="p-5 space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Alamat Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Role
                </label>
                <select
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="student">Siswa</option>
                  <option value="instructor">Instruktur</option>
                </select>
              </div>
              <div className="flex justify-end gap-2 pt-2 border-t border-gray-100 mt-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-xl text-xs font-semibold text-gray-700 hover:bg-gray-50 cursor-pointer"
                  disabled={submitting}
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl text-xs font-semibold cursor-pointer disabled:opacity-50"
                  disabled={submitting}
                >
                  {submitting ? "Menyimpan..." : "Simpan Perubahan"}
                </button>
              </div>
            </form>
            <div className="p-4 bg-red-50 border-t border-red-100 flex justify-between items-center px-5">
              <span className="text-[11px] text-red-600 font-medium">
                Hapus akun ini?
              </span>
              <button
                type="button"
                onClick={handleDelete}
                disabled={submitting}
                className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-semibold cursor-pointer disabled:opacity-50"
              >
                Hapus User
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserDetail;
