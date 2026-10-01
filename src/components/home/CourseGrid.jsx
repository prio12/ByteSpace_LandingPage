import { courses } from "../../data/courses";
import CourseCard from "./CourseCard";

const CourseGrid = () => {
  return (
    <section className="flow-root bg-white">
      <div className="mx-auto mt-[77px] grid w-full max-w-[1199px] grid-cols-3 gap-10">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default CourseGrid;
