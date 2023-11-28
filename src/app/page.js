import { Box, Heading, Text } from '@chakra-ui/react';
import InscriptionBanner from '@/app/components/InscriptionBanner';
import LaboralFormation from '@/app/components/LaboralFormation';
import images from '@/app/content/imageData';
import OurAllies from '@/app/components/OurAllies';
import OurInstitutions from '@/app/components/OurInstitutions';
import CourseList from './components/CourseList';
import cursos from './content/cursosData';
import CardContent from './components/CardContent';
import HeroHeader from '@/app/components/HeroHeader';

export default function Home() {
  return (
    <>
      <Box padding="50" mb="16">
        <HeroHeader />
        <Heading
          as="h1"
          fontSize="xx-large"
          textAlign="center"
          maxWidth="800px"
          mx="auto"
        >
          ¡CETAV les da la más cordial bienvenida!
          {/* TODO MOVER COLOR AL THEME */}
          <Text
            as="span"
            display="block"
            fontSize="lg"
            mt="4"
            fontWeight="medium"
          >
            Somos un centro de formación para el empleo, con nosotros podés
            acceder a programas técnicos y cursos libres para desarrollar tu
            perfil profesional. Creamos alianzas público-privadas para que
            nuestros cursos sean accesibles y nuestra oferta esté alineada a las
            demandas del mercado.
          </Text>
        </Heading>
      </Box>
      <OurInstitutions />
      <CardContent />
      <CourseList cursos={cursos.tecnicos} title={'Nuestros programas'} />
      <InscriptionBanner />
      <LaboralFormation />
      <OurAllies images={images} />
    </>
  );
}
