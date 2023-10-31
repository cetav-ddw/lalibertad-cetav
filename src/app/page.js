import { Heading } from '@chakra-ui/react';
import InscriptionBanner from '@/app/components/InscriptionBanner';
import FormacionLaboral from '@/app/components/FormacionLaboral';

export default function Home() {
  return <>
  <Heading as="h1">HOME page</Heading>
  <InscriptionBanner/>
  <FormacionLaboral/>
  </>
}

