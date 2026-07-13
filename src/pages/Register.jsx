// ==================================================================
// HALAMAN REGISTER
//
// Konsep yang dipakai :
// - Controlled component (value + onChange)
// - Validasi 3 level : required, format (regex email) length/match
// - Visual error : border merah + pesan dibawah input
// Flow : Validate -> POST /api/register -> simpan token -> Dashboard
// ==================================================================

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { apiRequest } from "../api/client";
import { MdEmail, MdLock } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { FaUser } from "react-icons/fa6";

const Register = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student",
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [role, setRole] = useState("student");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.name.trim()) newErrors.name = "Nama wajib diisi";

    if (!form.email.trim()) {
      newErrors.email = "Email wajib diisi.";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Format email tidak valid";
    }

    if (!form.password) {
      newErrors.password = "Password wajib diisi";
    } else if (form.password.length < 6) {
      newErrors.password = "Password minimal 6 karakter";
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Konfirmasi Password tidak cocok";
    }

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
      const data = await apiRequest("/register", {
        method: "POST",
        body: {
          name: form.name,
          email: form.email,
          password: form.password,
          password_confirmation: form.confirmPassword,
        },
      });
      login(data.token, data.user);
      navigate("/dashboard");
    } catch (err) {
      if (err.data?.errors) {
        const laravelErrors = {};
        Object.keys(err.data.errors).forEach((key) => {
          laravelErrors[key] = err.data.errors[key][0];
        });
        setErrors(laravelErrors);
      }
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col justify-between font-sans">
      {/* CONTAINER UTAMA (Card Tengah) */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
          {/* SISI KIRI: BANNER BIRU TUA */}
          <div className="bg-[#0f2547] text-white p-8 md:p-12 flex flex-col gap-8 justify-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                Start Your Academic Excellence Journey
              </h1>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Join thousands of students and instructors in a world-class
                learning management environment built for focus and precision.
              </p>
            </div>

            {/* List Fitur Unggulan */}
            <div className="flex flex-col gap-6">
              {/* Item 1 */}
              <div className="flex gap-4 items-start">
                <div className="bg-white/10 p-3 rounded-xl flex items-center justify-center">
                  <GiGraduateCap className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm md:text-base">
                    Accredited Content
                  </h3>
                  <p className="text-xs text-gray-400">
                    Expert-vetted curriculum across all disciplines.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-4 items-start">
                <div className="bg-white/10 p-3 rounded-xl flex items-center justify-center">
                  <HiOutlineAcademicCap className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm md:text-base">
                    Seamless Performance
                  </h3>
                  <p className="text-xs text-gray-400">
                    Zero-latency dashboard and media streaming.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SISI KANAN: FORM REGISTER */}
          <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
            <div className="max-w-md w-full mx-auto flex flex-col gap-6">
              {/* Header Form */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0f2547] mb-2">
                  Create Account
                </h2>
                <p className="text-sm text-gray-500">
                  Please fill in your details to get started.
                </p>
              </div>

              {/* Form Input */}
              {serverError && (
                <div className="bg-amber-100 text-red-500 py-2.5 px-3 rounded-lg text-sm mb-4">
                  {serverError}
                </div>
              )}
              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-4"
              >
                {/* Full Name Field */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <div className="flex items-center gap-3 px-4 py-3 bg-[#f0f4f9] border border-transparent rounded-xl focus-within:border-blue-500 focus-within:bg-white transition-all">
                    <FaUser className="text-gray-400 w-4 h-4 shrink-0" />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`w-full bg-transparent text-sm focus:outline-none text-gray-800 placeholder-gray-400 ${errors.name ? "border-red-500" : ""}`}
                    />
                  </div>
                  {errors.name && (
                    <small className="text-red-500 text-sm mt-2">
                      {errors.name}
                    </small>
                  )}
                </div>

                {/* Email Field */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <div className="flex items-center gap-3 px-4 py-3 bg-[#f0f4f9] border border-transparent rounded-xl focus-within:border-blue-500 focus-within:bg-white transition-all">
                    <MdEmail className="text-gray-400 w-4 h-4 shrink-0" />
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="example@mail.com"
                      className={`w-full bg-transparent text-sm focus:outline-none text-gray-800 placeholder-gray-400 ${errors.email ? "border-red-500" : ""}`}
                    />
                  </div>
                  {errors.email && (
                    <small className="text-red-500 text-sm mt-2">
                      {errors.email}
                    </small>
                  )}
                </div>

                {/* Password Field */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="flex items-center gap-3 px-4 py-3 bg-[#f0f4f9] border border-transparent rounded-xl focus-within:border-blue-500 focus-within:bg-white transition-all">
                    <MdLock className="text-gray-400 w-4 h-4 shrink-0" />
                    <input
                      type="password"
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className={`w-full bg-transparent text-sm focus:outline-none text-gray-800 placeholder-gray-400 ${errors.password ? "border-red-500" : ""}`}
                    />
                  </div>
                  {errors.password && (
                    <small className="text-red-500 text-sm mt-2">
                      {errors.password}
                    </small>
                  )}
                </div>

                {/* Password Confirmation Field */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">
                    Password Confirmation
                  </label>
                  <div className="flex items-center gap-3 px-4 py-3 bg-[#f0f4f9] border border-transparent rounded-xl focus-within:border-blue-500 focus-within:bg-white transition-all">
                    <MdLock className="text-gray-400 w-4 h-4 shrink-0" />
                    <input
                      type="password"
                      name="confirmPassword"
                      value={form.confirmPassword}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className={`w-full bg-transparent text-sm focus:outline-none text-gray-800 placeholder-gray-400 ${errors.confirmPassword ? "border-red-500" : ""}`}
                    />
                  </div>
                  {errors.confirmPassword && (
                    <small className="text-red-500 text-sm mt-2">
                      {errors.confirmPassword}
                    </small>
                  )}
                </div>

                {/* Role Selection Field */}
                <div className="flex flex-col gap-2.5">
                  <label className="text-sm font-medium text-gray-700">
                    I am joining as a:
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {/* Opsi Student */}
                    <div
                      onClick={() => setRole("student")}
                      className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl cursor-pointer transition-all ${
                        role === "student"
                          ? "border-2 border-indigo-600 bg-indigo-50/50 text-indigo-600"
                          : "border border-gray-200 bg-[#f8fafc] text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <GiGraduateCap className="w-6 h-6" />
                      <span className="text-sm font-semibold">Student</span>
                    </div>

                    {/* Opsi Instructor */}
                    <div
                      onClick={() => setRole("instructor")}
                      className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl cursor-pointer transition-all ${
                        role === "instructor"
                          ? "border-2 border-indigo-600 bg-indigo-50/50 text-indigo-600"
                          : "border border-gray-200 bg-[#f8fafc] text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <HiOutlineAcademicCap className="w-6 h-6" />
                      <span className="text-sm font-semibold">Instructor</span>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#0f2547] text-white py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center hover:bg-slate-800 transition-all shadow-md mt-2 hover:cursor-pointer"
                >
                  {" "}
                  {submitting ? "Please wait" : "Register Account"}
                </button>
              </form>

              {/* Footer Pindah ke Login */}
              <p className="text-center text-sm text-gray-500">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER HALAMAN BAWAH */}
      <footer className="w-full bg-slate-100 border-t border-gray-200 px-6 py-4 text-xs text-gray-500 text-center">
        © 2026 EduPro Learning Management System. All rights reserved.
      </footer>
    </div>
  );
};

export default Register;
