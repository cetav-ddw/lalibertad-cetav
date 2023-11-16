import OurTeamCard from '@/app/components/OurTeam';
import OurHistory from '@/app/components/OurHistory';
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
      <OurHistory />
      <OurTeamCard />
      <AdvisoryBoard />
      <FaqBanner />
    </>
  );
}
