import Link from 'next/link';
import { Heading } from '@chakra-ui/react';
import TestimonyList from '@/app/components/Testimonies/TestimonyList';
import InscriptionBanner from '@/app/components/InscriptionBanner';
import testimonies from '@/app/content/testimonies';

export default function AnalisisDatosPage() {
  return (
    <>
      <Heading as="h1">ANALISIS Y VISUALIZACION DE DATOS PAGE</Heading>
      <Link href="/tecnicos">Tecnicos</Link>
      <TestimonyList testimonies={testimonies.web} />
      <InscriptionBanner />
    </>
  );
}
