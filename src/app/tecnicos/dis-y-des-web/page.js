import Link from 'next/link';
import { Heading } from '@chakra-ui/react';
import InscriptionBanner from '@/app/components/InscriptionBanner';
import FAQbox from '@/app/components/FAQcomponent';

export default function WebPage() {
  return (
    <>
      <Heading as="h1">DISEÑO Y DESARROLLO WEB</Heading>
      <Link href="/tecnicos">Tecnicos</Link>
      <InscriptionBanner />
      <FAQbox />
    </>
  );
}
