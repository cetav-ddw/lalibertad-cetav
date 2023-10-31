import { Heading } from '@chakra-ui/react';
import InscriptionBanner from '@/app/components/InscriptionBanner';
import LaboralFormation from '@/app/components/LaboralFormation';

export default function Home() {
  return <>
  <Heading as="h1">HOME page</Heading>
  <InscriptionBanner/>
  <LaboralFormation/>
  </>
}

