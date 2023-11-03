import { Heading } from '@chakra-ui/react';
import ProfessorCard from '@/app/components/ProfessorCard';

export default function AboutCetav() {
  return (
    <>
      <Heading as="h1" fontSize="xx-large">
        Sobre el CETAV
      </Heading>
      <ProfessorCard />
    </>
  );
}
