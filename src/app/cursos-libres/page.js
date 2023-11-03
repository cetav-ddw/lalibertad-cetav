import CourseList from '@/app/components/CourseList';
import cursos from '../content/cursosData';
import { Heading } from '@chakra-ui/react';

export default function CursosLibres() {
  return (
    <>
      <Heading as="h1" fontSize="xx-large">
        Cursos libres
      </Heading>
      <CourseList
        cursos={cursos.cursosLibresDiseno}
        showDescription
        title={'Cursos de Diseño'}
      />
      <CourseList
        cursos={cursos.cursosLibresComputo}
        showDescription
        title={'Cursos de Computo'}
      />
    </>
  );
}
