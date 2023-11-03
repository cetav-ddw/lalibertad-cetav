import { Box, Heading, Text } from '@chakra-ui/react';
import InscriptionBanner from '@/app/components/InscriptionBanner';
import LaboralFormation from '@/app/components/LaboralFormation';

export default function Home() {
  return (
    <>
    <Box textAlign="center" padding="50" backgroundColor="#848484" h="300px">
        <Heading as="h1" fontSize="xx-large">
          ¡Bienvenid@s al Cetav!
          {/* TODO MOVER COLOR AL THEME */}
          <Text as="span" display="block">
          ¿Qué debes saber?
          </Text>
        </Heading>
      </Box>
      <InscriptionBanner />
      <LaboralFormation />
    </>
  );
}
