import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import SectionHeading from '@/app/components/SectionHeading';

const expectations = [
  {
    title: 'Compromiso',
    description:
      'Estás comprometido a aprender material avanzado a un ritmo acelerado y riguroso.',
  },
  {
    title: 'Cultura',
    description:
      'Valoramos la consideración, la dedicación, la creatividad y la orientación hacia el trabajo en equipo.',
  },
  {
    title: 'Mentalidad de crecimiento',
    description:
      'No importa adónde te lleven tus intereses, siempre seguirás aprendiendo y creciendo a lo largo del camino.',
  },
];

// ToDo falta agregar los iconos
const ExpectactionsBanner = () => {
  return (
    <Box mb="16">
      <SectionHeading title="Lo que buscamos en los futuros estudiantes." />
      <Flex flexWrap="wrap" justifyContent="center" maxW="980px" mx="auto">
        {expectations.map(({ title, description }) => {
          return (
            <Flex
              key={title}
              flexDirection="column"
              alignItems="center"
              textAlign="center"
              maxW="48%"
              mx="2"
              my="6"
            >
              <Heading as="h3" fontSize="lg" color="#444444" mb="2">
                {title}
              </Heading>
              <Text color="#444444" textAlign="center">
                {description}
              </Text>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
};

export default ExpectactionsBanner;
