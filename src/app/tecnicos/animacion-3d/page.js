import { Heading } from '@chakra-ui/react';
import Link from 'next/link';
import InscriptionBanner from '@/app/components/InscriptionBanner';
import TestimonyList from '@/app/components/Testimonies/TestimonyList';
import OurTeachers from '@/app/components/OurTeachers';
import ExpectactionsBanner from '@/app/components/ExpectactionsBanner';
import testimonies from '@/app/content/testimonies';
import teachers from '@/app/content/teachers';
import FaqBanner from '@/app/components/FAQcomponent';

export default function Animacion3D() {
  return (
    <>
      <Heading as="h1">ANIMACION 3D PAGE</Heading>
      <InscriptionBanner />
      <ExpectactionsBanner />
      <TestimonyList testimonies={testimonies.web} />
      <OurTeachers teacherList={teachers.web} />
      <FaqBanner />
    </>
  );
}
