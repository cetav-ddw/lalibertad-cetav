import Link from 'next/link';
import { Heading } from '@chakra-ui/react';
import CareerSection from '@/app/components/inscriptionCard';

export default function AnalisisDatosPage() {
  return (
    <>
      <Heading as="h1">ANALISIS Y VISUALIZACION DE DATOS PAGE</Heading>
      <Link href="/tecnicos">Tecnicos</Link>
      <CareerSection/>
    </>
  );
}
