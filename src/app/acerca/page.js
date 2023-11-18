import OurTeamCard from '@/app/components/OurTeam';
import CetavIntro from '@/app/components/CetavIntro';
import AdvisoryBoard from '@/app/components/AdvisoryBoard';
import FaqBanner from '@/app/components/FaqsBanner';
import PHeading from '@/app/components/PageHeading';
import headingInfo from '@/app/content/pageHeading';

export default function AboutCetav() {
  return (
    <>
      <PHeading
        title={headingInfo.acercaN.title}
        titleColor={headingInfo.acercaN.titleColor}
        text={headingInfo.acercaN.text}
        imgSrc={headingInfo.acercaN.imgSrc}
      />
      <CetavIntro />
      <OurTeamCard />
      <AdvisoryBoard />
      <FaqBanner />
    </>
  );
}
