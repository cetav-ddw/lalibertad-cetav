import { Box } from '@chakra-ui/react';
import InscriptionBanner from '@/app/components/InscriptionBanner';
import LaboralFormation from '@/app/components/LaboralFormation';
import images from '@/app/content/imageData';
import OurAllies from '@/app/components/OurAllies';
import OurInstitutions from '@/app/components/OurInstitutions';
import GenderStats from '@/app/components/GenderStats';
import DonutChart from '@/app/components/donut-chart/DonutChart';
import HeroHeader from '@/app/components/HeroHeader';
import { StatsData } from './content/statsData';
import ProgramCards from './components/ProgramCards';

export const metadata = {
  title: 'CETAV',
  description:
    'Somos un centro de formación para el empleo, con nosotros podés acceder a programas técnicos y cursos libres para desarrollar tu perfil profesional. Creamos alianzas público-privadas para que nuestros cursos sean accesibles y nuestra oferta esté alineada a las demandas del mercado',
  openGraph: {
    title: 'CETAV',
    description:
      'Somos un centro de formación para el empleo, ofreciendo programas técnicos y cursos libres para desarrollar tu perfil profesional.',
  },
};

export default function Home() {
  const donutData = StatsData.donutChartStats.map((item) => ({
    name: item.name,
    value: item.value,
  }));

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
      <ProgramCards/>
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
