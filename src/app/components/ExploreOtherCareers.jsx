import { Box } from '@chakra-ui/react';
import CourseList from '@/app/components/CourseList';
import cursos from '../content/cursosData';

const ExploreOtherCareers = ({ currentCourseId }) => {
  const otherCourses = cursos.tecnicos.filter(
    (course) => course.id !== currentCourseId,
  );

  const shuffledCourses = shuffleArray(otherCourses);

  const limitedCourses = shuffledCourses.slice(0, 3);

  return (
    <Box>
      <CourseList
        cursos={limitedCourses}
        showDescription
        title="Explora nuestras otras carreras"
      />
    </Box>
  );
};

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default ExploreOtherCareers;
