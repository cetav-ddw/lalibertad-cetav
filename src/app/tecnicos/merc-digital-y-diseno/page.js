import { Heading } from '@chakra-ui/react';
import Link from 'next/link';
import InscriptionBanner from '@/app/components/InscriptionBanner';
import FaqBanner from '@/app/components/FAQcomponent';
import TestimonyList from '@/app/components/Testimonies/TestimonyList';
import OurTeachers from '@/app/components/OurTeachers';
import testimonies from '@/app/content/testimonies';
import teachers from '@/app/content/teachers';

export default function MercadeoPage() {
  return (
    <>
      <Heading as="h1">MERCADEO DIGITAL Y DISEÑO PAGE</Heading>
      <Link href="/tecnicos">Tecnicos</Link>
      <InscriptionBanner />
      <TestimonyList testimonies={testimonies.web} />
      <OurTeachers teacherList={teachers.web} />
      <InscriptionBanner />
      <FaqBanner />
    </>
  );
}
