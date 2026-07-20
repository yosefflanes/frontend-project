import Button from "../atoms/Button";
import { GoArrowLeft, GoArrowRight  } from "react-icons/go";

const PaginationControls = ({ currentPage, totalPages, onPrev, onNext }) => (
  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 pt-6 border-t border-gray-100">
    <div className="flex gap-2 justify-between w-full items-center">
      <Button className="flex items-center gap-2" onClick={onPrev} disabled={currentPage === 1}>
        <GoArrowLeft /> 
        Sebelumnya
      </Button>
      <div>
        <span className="text-xs font-semibold text-subtitle">
        Halaman {currentPage} dari {totalPages}
      </span>
      </div>
      <Button className="flex items-center gap-2" onClick={onNext} disabled={currentPage === totalPages}>
        Selanjutnya
        <GoArrowRight />
      </Button>
    </div>
  </div>
);
export default PaginationControls;