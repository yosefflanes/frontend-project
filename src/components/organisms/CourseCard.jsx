import Badge from "../atoms/Badge";
import Heading from "../atoms/Heading";
import CardFooter from "../molecules/CardFooter";

const CourseCard = ({ item }) => {
  const getRatingVariant = (ratingClass) => {
    if (ratingClass === "Top rated") return "success";
    if (ratingClass === "Recommended") return "purple";
    return "subtitle";
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
      <div>
        {/* Thumbnail Area */}
        <div className="w-full h-40 bg-secondary/10 flex items-center justify-center text-secondary font-bold text-sm relative">
          <span>{item.thumbnail || "No Image"}</span>
          <Badge
            variant={getRatingVariant(item.rating_class)}
            className="absolute top-3 left-3 shadow-sm"
          >
            {item.rating_class}
          </Badge>
        </div>
        {/* Card Body */}
        <div className="p-5">
          <Badge variant="default" className="mb-2 rounded-md">
            {item.category?.name}
          </Badge>
          <Heading
            level={3}
            className="group-hover:text-secondary transition-colors line-clamp-2"
          >
            {item.title}
          </Heading>
          <p className="text-xs text-subtitle mt-2 line-clamp-2">
            {item.description}
          </p>
        </div>
      </div>
      {/* Card Footer Molecule */}
      <CardFooter instructorName={item.instructor?.name} rating={item.rating} />
    </div>
  );
};
export default CourseCard;
