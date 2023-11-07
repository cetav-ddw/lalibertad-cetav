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
      <Box padding="50" mb="16">
        <Heading
          as="h1"
          fontSize="xx-large"
          textAlign="center"
          maxWidth="800px"
          mx="auto"
        >
          ¡Bienvenid@s al Cetav!
          {/* TODO MOVER COLOR AL THEME */}
          <Text
            as="span"
            display="block"
            fontSize="lg"
            mt="4"
            fontWeight="medium"
          >
            Brindamos a personas jóvenes, la oportunidad de desarrollar
            competencias técnicas en áreas relacionadas a la tecnología y las
            artes visuales.
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
