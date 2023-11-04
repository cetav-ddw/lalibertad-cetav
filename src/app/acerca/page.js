import { Heading } from '@chakra-ui/react';
import OurHistory from '@/app/components/OurHistory';
import AdvisoryBoard from '@/app/components/AdvisoryBoard'

export default function AboutCetav() {
  return (
    <>
    <Heading as="h1" fontSize="xx-large">
      Sobre el CETAV
    </Heading>
    <OurHistory/>
    <AdvisoryBoard/>
    </>
  );
}
