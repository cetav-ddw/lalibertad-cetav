import Link from 'next/link';
import { Heading } from '@chakra-ui/react';
import InscriptionBanner from '@/app/components/InscriptionBanner';

export default function Animacion3D() {
  return (
    <>
      <Heading as="h1">ANIMACION 3D PAGE</Heading>
      <Link href="/tecnicos">Tecnicos</Link>
      <InscriptionBanner/>
    </>
  );
}