import CourseList from '@/app/components/CourseList';
import cursos from '../content/cursosData';
import shuffleArray from '@/app/utils/shuffled';
import SectionHeading from './SectionHeading';

const ExploreOtherCareers = ({ currentCourseId, isHomePage, items, title }) => {
  let otherCourses = cursos.tecnicos.filter(
    (course) => course.id !== currentCourseId,
  );

  if (isHomePage) {
    const cursosLibresMix = cursos.cursosLibresDiseno.concat(
      cursos.cursosLibresComputo,
    );
    otherCourses = cursosLibresMix;
  }

  const shuffledCourses = shuffleArray(otherCourses);

  const limitedCourses = shuffledCourses.slice(0, items);

  return (
    <>
      <SectionHeading title={title} />
      <CourseList cursos={limitedCourses} showDescription />;
    </>
  );
};

export default ExploreOtherCareers;
