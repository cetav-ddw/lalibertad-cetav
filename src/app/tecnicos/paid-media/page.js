import Link from 'next/link';
import { Heading } from '@chakra-ui/react';

export default function PaidMedia() {
  return (
    <>
      <Heading as="h1">PAID MEDIA PAGE</Heading>
      <Link href="/tecnicos">Tecnicos</Link>
    </>
  );
}
