import CourseCard from './CourseCard';

const CourseGrid = ({courses}) => {
    if (courses.length === 0) {
        return (
            <div className='text-center p-16 bg-white rounded-2xl border border-gray-100 text-subtitle'>
                Belum ada kelas yang tersedia.
            </div>
        );
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {courses.map((item) => (
                <CourseCard key={item.id} item={item} />
            ))}
        </div>
    );
};

export default CourseGrid;