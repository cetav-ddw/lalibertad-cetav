import { Heading } from '@chakra-ui/react';
import FaqBanner from '../components/FaqsBanner';
import cursos from '../content/cursosData';
import ListaCursos from '../components/CourseList';

export default function Tecnicos() {
  return (
    <>
      <Heading as="h1">TECNICOS PAGE</Heading>
      <ListaCursos
        variante={'tecnicoTexto'}
        cursos={cursos.tecnicos}
      ></ListaCursos>
      <FaqBanner />
    </>
  );
}
