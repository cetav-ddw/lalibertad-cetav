import { Box, Heading, Text } from '@chakra-ui/react';
import InscriptionBanner from '@/app/components/InscriptionBanner';
import LaboralFormation from '@/app/components/LaboralFormation';
import images from '@/app/content/imageData';
import CourseList from '@/app/components/CourseList';
import cursos from '@/app/content/cursosData';
import OurAllies from '@/app/components/OurAllies';
import OurInstitutions from '@/app/components/OurInstitutions';
import GenderStats from '@/app/components/GenderStats';
import DonutChart from '@/app/components/donut-chart/DonutChart';
import HeroHeader from '@/app/components/HeroHeader';
import { StatsData } from './content/statsData';

export default function Home() {
  const donutData = StatsData.donutChartStats.map((item) => ({
    name: item.name,
    value: item.value,
  }));

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
      <CourseList cursos={cursos.tecnicos} title={'Nuestros programas'} />
      <InscriptionBanner />
      <LaboralFormation />
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <DonutChart width={900} height={400} data={donutData} />
      </Box>
      <GenderStats />
      <OurAllies images={images} />
    </>
  );
}
