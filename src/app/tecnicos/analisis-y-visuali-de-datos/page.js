import { Heading } from '@chakra-ui/react';
import TestimonyList from '@/app/components/Testimonies/TestimonyList';
import InscriptionBanner from '@/app/components/InscriptionBanner';
import FaqBanner from '@/app/components/FaqsBanner';
import OurTeachers from '@/app/components/OurTeachers';
import ExpectactionsBanner from '@/app/components/ExpectactionsBanner';
import GoodToKnowBanner from '@/app/components/GoodToKnowBanner';
import SoftSkillsBanner from '@/app/components/SoftSkillsBanner';
import testimonies from '@/app/content/testimonies';
import teachers from '@/app/content/teachers';
import preInscription from '@/app/content/pre-inscription';

export default function AnalisisDatosPage() {
  return (
    <>
      <Heading as="h1">ANALISIS Y VISUALIZACION DE DATOS PAGE</Heading>
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
