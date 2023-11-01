import { Heading } from '@chakra-ui/react';
import FaqBanner from '../components/FaqsBanner';
import cursos from '../content/cursosData';

import CourseList from '../components/CourseList';

export default function Tecnicos() {
  return (
    <>
      <Heading as="h1">TECNICOS PAGE</Heading>
      <CourseList cursos={cursos.tecnicos} showDescription />
      <FaqBanner />
    </>
  );
}
