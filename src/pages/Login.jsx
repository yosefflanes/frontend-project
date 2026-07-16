// ====================================================================
// INI ADALAH HALAMAN LOGIN
//
// Flow: validate -> POST api/login -> simpan token + user -> dashboard
// ====================================================================

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { apiRequest } from "../api/client";
import { GiGraduateCap } from "react-icons/gi";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Format email tidak valid";
    }

    if (!form.password) newErrors.password = "Password wajib diisi";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);
    try {
      const response = await apiRequest("/login", {
        method: "POST",
        body: { email: form.email, password: form.password },
      });
      login(response.data.token, response.data.user);
      navigate("/dashboard");
    } catch (err) {
      setServerError(err.message || "Login gagal");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-[#f8fafc] flex flex-col justify-between">
      {/* CONTAINER UTAMA (Card Tengah) */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 min-h-150">
          {/* SISI KIRI: BANNER BIRU TUA */}
          <div className="bg-[#1A365D] text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
            {/* Dekorasi Aksen background halus */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full filter blur-3xl opacity-20 -mr-20 -mt-20"></div>

            <div className="flex gap-2 items-center">
              {/* PERBAIKAN: Menambahkan pembungkus tag untuk logo & teks agar seimbang */}
              <GiGraduateCap size={22} />
              <Link to="/" className="text-xl font-bold">
                EduPro
              </Link>
            </div>

            {/* Konten Utama Banner */}
            <div className="my-auto py-8 z-10">
              <h1 className="text-2xl md:text-4xl font-extrabold leading-tight mb-6">
                Selamat Datang Kembali di <br />
                <span className="text-blue-200">EduPro</span>
              </h1>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-sm">
                Masuk untuk melanjutkan perjalanan belajarmu, mengakses materi
                kelas, dan memantau perkembangan akademikmu di satu tempat.
              </p>
            </div>

            {/* Footer Banner */}
            <div className="flex items-center gap-3 z-10">
              <div className="w-8 h-0.75 bg-indigo-500"></div>
              <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                EduPro Academic
              </span>
            </div>
          </div>
          {/* SISI KANAN: FORM LOGIN */}
          <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
            <div className="max-w-md w-full mx-auto">
              {/* Tempat Server Error */}
              {serverError && (
                <div className="bg-amber-100 text-red-500 py-2.5 px-3 rounded-lg text-sm mb-4">
                  {serverError}
                </div>
              )}

              {/* Greeting */}
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Yuk, Masuk Lagi!
              </h2>
              <p className="text-sm text-gray-500 mb-8">
                Silakan masuk ke akun Anda untuk mengakses dashboard.
              </p>

              {/* Form Input */}
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email
                  </label>
                  <div>
                    <div className="flex items-center pointer-events-none text-gray-400"></div>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="example@mail.com"
                      className={`w-full pl-2 pr-4 py-2.5 bg-gray-50 border rounded-xl text-sm focus:outline-none focus:ring-2 transition-all placeholder-gray-400 ${errors.email ? "border-red-500 focus:ring-red-200" : "border-gray-200 focus:ring-blue-500"}`}
                    />
                    {errors.email && (
                      <small className="text-red-500 text-sm mt-2">
                        {errors.email}
                      </small>
                    )}
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="block text-sm font-medium text-gray-700">
                      Kata Sandi
                    </label>
                  </div>
                  <div>
                    <div className=" pl-3 flex items-center pointer-events-none text-gray-400"></div>
                    <input
                      type="password"
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className={`w-full pl-2 pr-4 py-2.5 bg-gray-50 border rounded-xl text-sm focus:outline-none focus:ring-2 transition-all placeholder-gray-400 ${errors.email ? "border-red-500 focus:ring-red-200" : "border-gray-200 focus:ring-blue-500"}`}
                    />
                    {errors.password && (
                      <small className="text-red-500 text-sm mt-2">
                        {errors.password}
                      </small>
                    )}
                  </div>
                </div>

                {/* Tombol Sign In */}
                <button
                  type="submit"
                  className="w-full bg-[#1A365D] text-white py-3 px-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-slate-800 active:scale-[0.99] transition-all shadow-md shadow-blue-900/10 mt-2 hover:cursor-pointer"
                >
                  {submitting ? "Memuat..." : "Masuk"}
                </button>
              </form>

              {/* Link Registrasi Bawah */}
              <p className="text-center text-xs sm:text-sm text-gray-500 mt-8">
                Belum punya akun ?{" "}
                <Link
                  to="/register"
                  className="font-semibold text-indigo-600 hover:text-blue-600 hover:underline"
                >
                  Daftar Akun
                </Link>
              </p>
            </div>
          </div>{" "}
          {/* PERBAIKAN: Menyeimbangkan penutup div grid kanan */}
        </div>
      </div>
    </div>
  );
};

export default Login;
