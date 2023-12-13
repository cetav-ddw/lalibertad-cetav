import OurTeamCard from '@/app/components/OurTeam';
import CetavIntro from '@/app/components/CetavIntro';
import AdvisoryBoard from '@/app/components/AdvisoryBoard';
import FaqBanner from '@/app/components/FaqsBanner';
import PHeading from '@/app/components/PageHeading';
import headingInfo from '@/app/content/pageHeading';
import Breadcrumbs from '@/app/components/Breadcrumbs';

export const metadata = {
  title: 'Más acerca de nosotros | CETAV',
  description:
    'La educación es la llave que abre las puertas del futuro. Cada día que aprendemos y crecemos, construimos los cimientos de un mañana lleno de posibilidades ilimitadas. ¡Atrévete a aprender, porque en la educación encuentras el poder para dar forma a tu propio destino!',
  openGraph: {
    title: 'Más acerca de nosotros',
    description:
      'Descubra más sobre nosotros, incluyendo nuestra historia y misión. Conozca cómo nos dedicamos a la innovación y la excelencia, y cómo nuestro equipo trabaja para marcar la diferencia en la industria.',
  },
};

export default function AboutCetav() {
  const paths = [
    { title: 'Inicio', path: '/' },
    { title: 'Sobre Nosotros', path: '/acerca' },
  ];
  return (
    <>
      <Breadcrumbs paths={paths} />
      <PHeading
        title={headingInfo.acercaN.title}
        titleColor={headingInfo.acercaN.titleColor}
        text={headingInfo.acercaN.text}
        imgSrc={headingInfo.acercaN.imgSrc}
      />
      <CetavIntro />
      <AdvisoryBoard />
      <OurTeamCard />
      <FaqBanner />
    </>
  );
}
