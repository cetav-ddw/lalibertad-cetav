import { Box, Heading, Text } from '@chakra-ui/react';
import InscriptionBanner from '@/app/components/InscriptionBanner';
import LaboralFormation from '@/app/components/LaboralFormation';
import images from '@/app/content/imageData';
import CourseList from '@/app/components/CourseList';
import cursos from '@/app/content/cursosData';
import OurAllies from '@/app/components/OurAllies';
import ExploreOtherCareers from '@/app/components/ExploreOtherCareers';

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
      <CourseList
        cursos={cursos.tecnicos}
        title={'Nuestras Carreras Técnicas'}
      />
      <InscriptionBanner />
      <LaboralFormation />
      <OurAllies images={images} />
      <ExploreOtherCareers
        isHomePage={true}
        items={2}
        title={'Hecha un vistazo a nuestros cursos'}
      />
    </>
  );
}
