import Link from 'next/link';
import { Heading } from '@chakra-ui/react';
import InscriptionBanner from '@/app/components/InscriptionBanner';
import FaqBanner from '@/app/components/FAQcomponent';

export default function CiberseguridadPage() {
  return (
    <>
      <Heading as="h1">CIBERSEGURIDAD PAGE</Heading>
      <Link href="/tecnicos">Tecnicos</Link>
      <InscriptionBanner />
      <FaqBanner />
    </>
  );
}
