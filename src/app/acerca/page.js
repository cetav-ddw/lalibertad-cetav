import OurTeamCard from '@/app/components/OurTeam';
import CetavIntro from '@/app/components/CetavIntro';
import AdvisoryBoard from '@/app/components/AdvisoryBoard';
import FaqBanner from '@/app/components/FaqsBanner';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import AboutBaner from '../components/AboutBanner';

export default function AboutCetav() {
  const paths = [
    { title: 'Inicio', path: '/' },
    { title: 'Sobre Nosotros', path: '/acerca' },
  ];
  return (
    <>
      <Breadcrumbs paths={paths} />
      <AboutBaner />
      <CetavIntro />
      <AdvisoryBoard />
      <OurTeamCard />
      <FaqBanner />
    </>
  );
}
