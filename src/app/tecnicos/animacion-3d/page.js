import { Heading } from '@chakra-ui/react';
import InscriptionBanner from '@/app/components/InscriptionBanner';
import TestimonyList from '@/app/components/Testimonies/TestimonyList';
import OurTeachers from '@/app/components/OurTeachers';
import FaqBanner from '@/app/components/FaqsBanner';
import ExpectactionsBanner from '@/app/components/ExpectactionsBanner';
import GoodToKnowBanner from '@/app/components/GoodToKnowBanner';
import SoftSkillsBanner from '@/app/components/SoftSkillsBanner';
import testimonies from '@/app/content/testimonies';
import teachers from '@/app/content/teachers';
import preInscription from '@/app/content/pre-inscription';

export default function Animacion3D() {
  return (
    <>
      <Heading as="h1" fontSize="xx-large">
        Animación 3D
      </Heading>
      <InscriptionBanner />
      <GoodToKnowBanner topicList={preInscription.web} />
      <ExpectactionsBanner />
      <TestimonyList testimonies={testimonies.web} />
      <SoftSkillsBanner />
      <OurTeachers teacherList={teachers.web} />
      <FaqBanner />
    </>
  );
}
