import { Heading } from '@chakra-ui/react';
import OurTeamCard from '@/app/components/OurTeam';
import OurHistory from '@/app/components/OurHistory';
import AdvisoryBoard from '@/app/components/AdvisoryBoard';
import PHeading from '@/app/components/PageHeading';
import headingInfo from '@/app/content/pageHeading';

export default function AboutCetav() {
  return (
    <>
      <PHeading
        title={headingInfo.acercaN.title}
        titleColor={headingInfo.acercaN.titleColor}
        imgSrc={headingInfo.web.imgSrc}
      />
      <OurHistory />
      <OurTeamCard />
      <AdvisoryBoard />
    </>
  );
}
