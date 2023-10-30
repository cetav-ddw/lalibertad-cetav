import Link from 'next/link';
import { Heading } from '@chakra-ui/react';
import CareerSection from '@/app/components/inscriptionCard';

export default function WebPage() {
  return (
    <>
      <Heading as="h1">DISEÑO Y DESARROLLO WEB</Heading>
      <Link href="/tecnicos">Tecnicos</Link>
      <CareerSection/>
    </>
  );
}
