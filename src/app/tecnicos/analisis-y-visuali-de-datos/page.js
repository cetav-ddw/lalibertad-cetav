import Link from 'next/link';
import { Heading } from '@chakra-ui/react';
import InscriptionBanner from '@/app/components/InscriptionBanner';
import FaqBanner from '@/app/components/FAQcomponent';
export default function AnalisisDatosPage() {
  return (
    <>
      <Heading as="h1">ANALISIS Y VISUALIZACION DE DATOS PAGE</Heading>
      <Link href="/tecnicos">Tecnicos</Link>
      <InscriptionBanner />
      <FaqBanner />
    </>
  );
}
