import { Box } from '@chakra-ui/react';
import InscriptionBanner from '@/app/components/InscriptionBanner';
import LaboralFormation from '@/app/components/LaboralFormation';
import images from '@/app/content/imageData';
import CourseList from '@/app/components/CourseList';
import cursos from '@/app/content/cursosData';
import OurAllies from '@/app/components/OurAllies';
import OurInstitutions from '@/app/components/OurInstitutions';
import HeroHeader from '@/app/components/HeroHeader';

export default function Home() {
  return (
    <>
      <Box
        width="100vw"
        position="relative"
        left="50%"
        transform="translateX(-50.6%)"
        backgroundImage="/images/medio-trazo.png"
        backgroundRepeat="no-repeat"
        backgroundPosition="right"
        backgroundSize="cover"
        mt="-16"
        pt="32"
        pb="32"
      >
        <HeroHeader />
      </Box>
      <OurInstitutions />
      <CourseList cursos={cursos.tecnicos} title={'Nuestros programas'} />
      <InscriptionBanner />
      <LaboralFormation />
      <OurAllies images={images} />
    </>
  );
}
