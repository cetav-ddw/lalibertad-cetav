import Link from 'next/link';
import { Heading } from '@chakra-ui/react';

export default function WebPage() {
  return (
    <>
      <Heading as="h1">DISEÑO Y DESARROLLO WEB</Heading>
      <Link href="/tecnicos">Tecnicos</Link>
    </>
  );
}
