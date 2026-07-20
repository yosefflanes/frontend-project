const CardFooter = ({ instructorName, rating }) => {
  return (
    <div className="p-5 pt-0 border-t border-gray-50 flex justify-between items-center text-xs mt-4">
      <div>
        <p className="text-subtitle">Instruktur</p>
        <p className="font-semibold text-pretty">
          {instructorName || "Anonim"}{" "}
        </p>
      </div>
      <div className="text-right">
        <p className="text-subtitle">Rating</p>
        <p className="font-bold text-primary">{rating} / 10</p>
      </div>
    </div>
  );
};

export default CardFooter;
