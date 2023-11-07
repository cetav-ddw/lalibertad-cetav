import { Box, Heading, Text } from '@chakra-ui/react';
import InscriptionBanner from '@/app/components/InscriptionBanner';
import LaboralFormation from '@/app/components/LaboralFormation';
import images from './content/imageData';
import CourseList from '@/app/components/CourseList';
import cursos from './content/cursosData';
import OurAllies from '@/app/components/OurAllies';
import OurInstitutions from '@/app/components/OurInstitutions';

export default function Home() {
  return (
    <>
      <Box textAlign="center" padding="50" h="300px">
        <Heading as="h1" fontSize="xx-large">
          ¡Bienvenid@s al Cetav!
          {/* TODO MOVER COLOR AL THEME */}
          <Text as="span" display="block">
            ¿Qué debes saber?
          </Text>
        </Heading>
      </Box>
      <OurInstitutions />
      <CourseList
        cursos={cursos.tecnicos}
        title={'Nuestras Carreras Técnicas'}
      />
      <InscriptionBanner />
      <LaboralFormation />
      <OurAllies images={images} />
    </>
  );
}
