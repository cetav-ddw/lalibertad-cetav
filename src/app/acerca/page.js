import OurTeamCard from '@/app/components/OurTeam';
import CetavIntro from '@/app/components/CetavIntro';
import AdvisoryBoard from '@/app/components/AdvisoryBoard';
import FaqBanner from '@/app/components/FaqsBanner';
import PHeading from '@/app/components/PageHeading';
import headingInfo from '@/app/content/pageHeading';
import Breadcrumbs from '@/app/components/Breadcrumbs';

export default function AboutCetav() {
  const paths = [
    { title: "Inicio", path: "/" },
    { title: "Sobre Nosotros", path: "/acerca" }
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
