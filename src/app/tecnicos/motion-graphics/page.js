import { Heading } from '@chakra-ui/react';
import InscriptionBanner from '@/app/components/InscriptionBanner';
import TestimonyList from '@/app/components/Testimonies/TestimonyList';
import OurTeachers from '@/app/components/OurTeachers';
import ExpectactionsBanner from '@/app/components/ExpectactionsBanner';
import testimonies from '@/app/content/testimonies';
import teachers from '@/app/content/teachers';

export default function MotionGraphicPage() {
  return (
    <>
      <Heading as="h1">MOTION GRAPHICS</Heading>
      <ExpectactionsBanner />
      <TestimonyList testimonies={testimonies.web} />
      <OurTeachers teacherList={teachers.web} />
      <InscriptionBanner />
    </>
  );
}
