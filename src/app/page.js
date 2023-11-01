import { Box, Heading } from '@chakra-ui/react';
import InscriptionBanner from '@/app/components/InscriptionBanner';
import LaboralFormation from '@/app/components/LaboralFormation';
import ListaCursos from './components/listacursos/CursosList';
import cursos from './content/cursosData';
import SectionHeading from './components/SectionHeading';

export default function Home() {
  return (
    <>
      <Box>
        <SectionHeading title="Nuetras Carreras Tecnicas" />
        <ListaCursos cursos={cursos.tecnicos}></ListaCursos>
      </Box>
      <Heading as="h1">HOME page</Heading>
      <InscriptionBanner />
      <LaboralFormation />
    </>
  );
}
