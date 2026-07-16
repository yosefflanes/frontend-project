import { useEffect, useState } from "react";
import { apiRequest } from "../api/client";
import { Link } from "react-router-dom";

const Course = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setErrors] = useState("");

  // Penerapan Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    apiRequest(`/courses?page=${currentPage}`)
      .then((res) => {
        if (isMounted) {
          if (res && res.success && res.data) {
            const paginationObj = res.data;

            setCourses(paginationObj.data);
            setCurrentPage(paginationObj.current_page || 1);
            setTotalPages(paginationObj.last_page || 1);
          } else {
            setCourses([]);
          }
        }
      })
      .catch((err) => {
        if (isMounted) setErrors(err.message || "Gagal memuat data kursus.");
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, [currentPage]);

  if (loading)
    return <div className="p-8 text-center">Memuat data kursus...</div>;
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>;

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8 mt-14">
      {/* Header Halaman */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-primary">Katalog Kursus</h1>
        <p className="text-sm text-subtitle mt-0.5">
          Kelola materi dan silabus kelas EduPro
        </p>
      </div>

      {courses.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 text-subtitle">
          Belum ada kelas yang tersedia.
        </div>
      ) : (
        <>
          {/* GRID KARTU KURSUS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-full h-40 bg-secondary/10 flex items-center justify-center text-secondary font-bold text-sm relative">
                    <span>{item.thumbnail || "No Image"}</span>
                    <span
                      className={`absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white ${item.rating_class === "Top rated" ? "bg-accent-btn" : "bg-accent-purple"}`}
                    >
                      {item.rating_class}
                    </span>
                  </div>
                  <div className="p-5">
                    <span className="text-[11px] font-bold text-secondary tracking-wide bg-secondary/5 px-2 py-0.5 rounded-md mb-2 inline-block">
                      {item.category?.name}
                    </span>
                    <h3 className="text-base font-bold text-primary leading-snug group-hover:text-secondary transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-subtitle mt-2 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="p-5 pt-0 border-t border-gray-50 flex justify-between items-center text-xs mt-4">
                  <div>
                    <p className="text-subtitle">Pengajar</p>
                    <p className="font-semibold text-primary">
                      {item.instructor?.name}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-subtitle">⭐ Rating</p>
                    <p className="font-bold text-primary">{item.rating} / 10</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* =========================================================
              🌟 KOMPONEN PAGINASI RESPONSİF & BERSIH (TAILWIND)
              ========================================================= */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 pt-6 border-t border-gray-100">
            {/* Teks Paginasi Terbaik */}
            <span className="text-xs font-semibold text-subtitle">
              Halaman {currentPage} dari {totalPages}
            </span>

            {/* Tombol Kontrol Halaman */}
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-gray-200 text-xs font-bold rounded-xl text-primary bg-white hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:hover:bg-white cursor-pointer"
              >
                ← Sebelumnya
              </button>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-4 py-2 border border-gray-200 text-xs font-bold rounded-xl text-primary bg-white hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:hover:bg-white cursor-pointer"
              >
                Selanjutnya →
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Course;
