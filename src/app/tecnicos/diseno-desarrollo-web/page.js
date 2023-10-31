import Link from 'next/link';
import { Heading } from '@chakra-ui/react';
import InscriptionBanner from '@/app/components/InscriptionBanner';

export default function WebPage() {
  return (
    <>
      <Heading as="h1">DISEÑO Y DESARROLLO WEB</Heading>
      <Link href="/tecnicos">Tecnicos</Link>
      <InscriptionBanner/>
    </>
  );
}
