import { Box, Flex, Text } from '@chakra-ui/react';
import SectionHeading from '@/app/components/SectionHeading';

const OurHistory = () => {
  return (
    <Box mb="16">
      <SectionHeading title="Nuestra Historia" />
      <Flex flexWrap="wrap" justifyContent="space-around">
        <Flex flexDirection="column" maxW="48%" mx="2" my="6">
          <Text color="#444444">
            {
              'El Centro de Tecnología y Artes Visuales (CETAV) del Parque La Libertad es un centro de educación técnica enfocado en la inclusión social para la innovación, que busca fomentar el desarrollo humano y la formación de personas jóvenes a partir de opciones de especialización técnica alineadas con las demandas del mercado.'
            }
          </Text>
        </Flex>
        <Flex flexDirection="column" maxW="48%" mx="2" my="6">
          <Text color="#444444">
            {
              'En el CETAV del Parque La Libertad, creemos que la empatía, la creatividad y la capacidad de trabajar en equipo, son competencias urgentes y diferenciadoras.'
            }
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default OurHistory;
