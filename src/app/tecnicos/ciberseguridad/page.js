import Link from 'next/link';
import { Heading } from '@chakra-ui/react';

export default function CiberseguridadPage() {
  return (
    <>
      <Heading as="h1">CIBERSEGURIDAD PAGE</Heading>
      <Link href="/tecnicos">Tecnicos</Link>
    </>
  );
}
