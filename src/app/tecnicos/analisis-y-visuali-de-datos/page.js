import Link from 'next/link';
import { Heading } from '@chakra-ui/react';
import TestimonioSection from '../../components/Testiminios/Testimonio';
import InscriptionBanner from '@/app/components/InscriptionBanner';

export default function AnalisisDatosPage() {
  return (
    <>
      <Heading as="h1">ANALISIS Y VISUALIZACION DE DATOS PAGE</Heading>
      <Link href="/tecnicos">Tecnicos</Link>
      <TestimonioSection />
      <InscriptionBanner/>
    </>
  );
}