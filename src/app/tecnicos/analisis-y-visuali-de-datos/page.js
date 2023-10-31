import { Heading } from '@chakra-ui/react';
import Link from 'next/link';
import TestimonyList from '@/app/components/Testimonies/TestimonyList';
import InscriptionBanner from '@/app/components/InscriptionBanner';
import FaqBanner from '@/app/components/FAQcomponent';
import OurTeachers from '@/app/components/OurTeachers';
import testimonies from '@/app/content/testimonies';
import teachers from '@/app/content/teachers';

export default function AnalisisDatosPage() {
  return (
    <>
      <Heading as="h1">ANALISIS Y VISUALIZACION DE DATOS PAGE</Heading>
      <Link href="/tecnicos">Tecnicos</Link>
      <InscriptionBanner />
      <FaqBanner />
      <TestimonyList testimonies={testimonies.web} />
      <OurTeachers teacherList={teachers.web} />
      <InscriptionBanner />
    </>
  );
}
