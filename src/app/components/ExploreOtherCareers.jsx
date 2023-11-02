import { Box } from '@chakra-ui/react';
import SectionHeading from './SectionHeading';
import CourseList from '@/app/components/CourseList';
import cursos from '../content/cursosData';

const ExploreOtherCareers = ({ currentCourseId }) => {
  const otherCourses = cursos.tecnicos.filter(
    (course) => course.id !== currentCourseId,
  );
  const limitedCourses = otherCourses.slice(0, 3);

  return (
    <Box>
      <SectionHeading title="Explora nuestras otras carreras" />
      <CourseList cursos={limitedCourses} showDescription />
    </Box>
  );
};

export default ExploreOtherCareers;