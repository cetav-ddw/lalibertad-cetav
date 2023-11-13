import { Box, Flex, Text } from '@chakra-ui/react';
import SectionHeading from '@/app/components/SectionHeading';

const OurHistory = () => {
  return (
    <Box mb={{ base: '8', md: '16' }}>
      <SectionHeading title="Nuestra Historia" />
      <Flex flexWrap="wrap" justifyContent="space-around">
        <Flex flexDirection="column" maxW="48%" mx={{ base: '2', md: '2' }} my={{ base: '4', md: '6' }}>
          <Text color="#444444" fontSize={{ base: 'sm', md: 'md' }}>
            El Centro de Tecnología y Artes Visuales (CETAV) del Parque La Libertad es un centro de educación técnica enfocado en la inclusión social para la innovación, que busca fomentar el desarrollo humano y la formación de personas jóvenes a partir de opciones de especialización técnica alineadas con las demandas del mercado.
          </Text>
        </Flex>
        <Flex flexDirection="column" maxW="48%" mx={{ base: '2', md: '2' }}  my={{ base: '4', md: '6' }}>
          <Text color="#444444" fontSize={{ base: 'sm', md: 'md' }}>
            En el CETAV del Parque La Libertad, creemos que la empatía, la creatividad y la capacidad de trabajar en equipo, son competencias urgentes y diferenciadoras.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default OurHistory;
