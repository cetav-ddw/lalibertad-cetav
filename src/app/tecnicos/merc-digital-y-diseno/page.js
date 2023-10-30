import Link from 'next/link';
import { Heading } from '@chakra-ui/react';
import InscriptionBanner from '@/app/components/InscriptionBanner';

export default function MercadeoPage() {
  return (
    <>
      <Heading as="h1">MERCADEO DIGITAL Y DISEÑO PAGE</Heading>
      <Link href="/tecnicos">Tecnicos</Link>
      <InscriptionBanner/>
    </>
  );
}
