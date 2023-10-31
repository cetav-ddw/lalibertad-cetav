import { Heading } from '@chakra-ui/react';
import InscriptionBanner from '@/app/components/InscriptionBanner';
import ListaCursos from './components/listacursos/CursosList';
import cursos from './content/cursosData';

export default function Home() {
  return (
    <>
      <ListaCursos cursos={cursos.tecnicos}></ListaCursos>
      <Heading as="h1">HOME page</Heading>
      <InscriptionBanner />
    </>
  );
}
