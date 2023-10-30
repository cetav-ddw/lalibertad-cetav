import Link from 'next/link';
import { Heading } from '@chakra-ui/react';
import CareerSection from '@/app/components/inscriptionCard';

export default function CiberseguridadPage() {
  return (
    <>
      <Heading as="h1">CIBERSEGURIDAD PAGE</Heading>
      <Link href="/tecnicos">Tecnicos</Link>
      <CareerSection/>
    </>
  );
}
