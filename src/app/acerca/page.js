import { Heading } from '@chakra-ui/react';
import OurTeamCard from '@/app/components/OurTeam';
import OurHistory from '@/app/components/OurHistory';

export default function AboutCetav() {
  return (
    <>
      <Heading as="h1" fontSize="xx-large">
        Sobre el CETAV
      </Heading>
      <OurTeamCard />
      <OurHistory />
    </>
  );
}
