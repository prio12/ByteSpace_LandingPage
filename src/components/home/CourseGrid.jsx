import { courses } from "../../data/courses";
import CourseCard from "./CourseCard";

const CourseGrid = () => {
  return (
    <section className="flow-root bg-white px-4">
      <div className="mx-auto mt-[77px] grid w-full max-w-[1199px] grid-cols-1 justify-items-center gap-10 min-[820px]:grid-cols-2 min-[1231px]:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default CourseGrid;
