import Link from 'next/link';
import { Heading } from '@chakra-ui/react';
import InscriptionBanner from '@/app/components/InscriptionBanner';
import FaqBanner from '@/app/components/FAQcomponent';

export default function MotionGraphicPage() {
  return (
    <>
      <Heading as="h1">MOTION GRAPHICS</Heading>
      <Link href="/tecnicos">Tecnicos</Link>
      <InscriptionBanner />
      <FaqBanner />
    </>
  );
}
