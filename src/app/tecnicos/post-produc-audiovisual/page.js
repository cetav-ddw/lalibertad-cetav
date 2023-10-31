import Link from 'next/link';
import { Heading } from '@chakra-ui/react';
import InscriptionBanner from '@/app/components/InscriptionBanner';
import FAQbox from '@/app/components/FAQcomponent';

export default function PostProducionPage() {
  return (
    <>
      <Heading as="h1">POSTPRODUCCION AUDIOVISUAL</Heading>
      <Link href="/tecnicos">Tecnicos</Link>
      <InscriptionBanner />
      <FAQbox />
    </>
  );
}
