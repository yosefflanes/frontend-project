import { useEffect, useState } from "react";
import { apiRequest } from "../api/client";
import Heading from "../components/atoms/Heading";
import CourseGrid from "../components/organisms/CourseGrid";
import PaginationControls from "../components/molecules/PaginationControls";

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
        if (isMounted && res?.success && res?.data) {
          setCourses(res.data.data);
          setCurrentPage(res.data.current_page || 1);
          setTotalPages(res.data.last_page || 1);
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
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8 mt-18">
      {/* Page Header Area */}
      <div className="mb-8">
        <Heading level={1}>Katalog Kursus</Heading>
        <p className="text-sm text-subtitle mt-1">Kelola Kursus</p>
      </div>

      {/* Grid kartu kursus */}
      <CourseGrid courses={courses} />

      {/* Paginasi */}
      {courses.length > 0 && (
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          onPrev={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          onNext={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
        />
      )}
    </div>
  );
};

export default Course;
