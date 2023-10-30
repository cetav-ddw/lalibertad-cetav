import Link from 'next/link';
import { Heading } from '@chakra-ui/react';
import CareerSection from '@/app/components/inscriptionCard';

export default function PostProducionPage() {
  return (
    <>
      <Heading as="h1">POSTPRODUCCION AUDIOVISUAL</Heading>
      <Link href="/tecnicos">Tecnicos</Link>
      <CareerSection/>
    </>
  );
}
