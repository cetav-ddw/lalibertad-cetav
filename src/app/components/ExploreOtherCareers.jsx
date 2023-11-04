import { Box } from '@chakra-ui/react';
import CourseList from '@/app/components/CourseList';
import cursos from '../content/cursosData';

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const ExploreOtherCareers = ({ currentCourseId, ishomePage, items }) => {
  const quantity = items === undefined ? 3 : items;
  const heading = ishomePage
    ? 'Hecha un vistazo a nuestros cursos'
    : 'Explora nuestras otras carreras';
  let otherCourses = cursos.tecnicos.filter(
    (course) => course.id !== currentCourseId,
  );

  if (ishomePage) {
    const cursosLibresMix = cursos.cursosLibresDiseno.concat(
      cursos.cursosLibresComputo,
    );
    otherCourses = cursosLibresMix;
  }

  const shuffledCourses = shuffleArray(otherCourses);

  const limitedCourses = shuffledCourses.slice(0, quantity);

  return (
    <Box>
      <CourseList cursos={limitedCourses} showDescription title={heading} />
    </Box>
  );
};

export default ExploreOtherCareers;
