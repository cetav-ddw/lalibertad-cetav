import Link from 'next/link';
import { Heading } from '@chakra-ui/react';
import TestimonyList from '@/app/components/Testimony/TestimonyList';
import InscriptionBanner from '@/app/components/InscriptionBanner';

export default function AnalisisDatosPage() {
  return (
    <>
      <Heading as="h1">ANALISIS Y VISUALIZACION DE DATOS PAGE</Heading>
      <Link href="/tecnicos">Tecnicos</Link>
      <TestimonyList />
      <InscriptionBanner />
    </>
  );
}
