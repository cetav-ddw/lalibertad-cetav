import Link from 'next/link';
import { Heading } from '@chakra-ui/react';
import InscriptionBanner from '@/app/components/InscriptionBanner';
import FAQbox from '@/app/components/FAQcomponent';

export default function PaidMedia() {
  return (
    <>
      <Heading as="h1">PAID MEDIA PAGE</Heading>
      <Link href="/tecnicos">Tecnicos</Link>
      <InscriptionBanner />
      <FAQbox />
    </>
  );
}
