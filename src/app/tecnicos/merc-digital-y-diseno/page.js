import Link from 'next/link';
import { Heading } from '@chakra-ui/react';
import CareerSection from '@/app/components/inscriptionCard';

export default function MercadeoPage() {
  return (
    <>
      <Heading as="h1">MERCADEO DIGITAL Y DISEÑO PAGE</Heading>
      <Link href="/tecnicos">Tecnicos</Link>
      <CareerSection/>
    </>
  );
}
