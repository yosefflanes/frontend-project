import Button from "../atoms/Button";

const PaginationControls = ({ currentPage, totalPages, onPrev, onNext }) => (
  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 pt-6 border-t border-gray-100">
    <span className="text-xs font-semibold text-subtitle">
      Halaman {currentPage} dari {totalPages}
    </span>
    <div className="flex gap-2">
      <Button onClick={onPrev} disabled={currentPage === 1}>← Sebelumnya</Button>
      <Button onClick={onNext} disabled={currentPage === totalPages}>Selanjutnya →</Button>
    </div>
  </div>
);
export default PaginationControls;