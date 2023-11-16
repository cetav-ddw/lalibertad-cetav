import { Link as NextLink } from 'next/link';
import { Box, Heading, Link, Text } from '@chakra-ui/react';

export default function FaqsBanner() {
  return (
    <Box
      maxW={{ base: '80%', md: '100%' }}
      textAlign="center"
      padding="20px"
      // TODO agregar color al theme
      border="4px solid #313677"
      borderRadius="5px"
      mx="auto"
      mb="16"
    >
      {/* TODO agregar color al theme */}
      <Heading as="h3" color="#313677" fontSize="x-large" mb="2">
        ¿Tiene preguntas? ¿Querés saber más?
      </Heading>
      <Text fontSize="large">
        En nuestra{' '}
        <Link
          as={NextLink}
          href="/preguntas-frecuentes"
          textDecoration="underline"
          // TODO agregar color al theme
          _hover={{ textDecoration: 'none' }}
        >
          {'sección de preguntas frecuentes'}
        </Link>{' '}
        podes encontrar más información.
      </Text>
    </Box>
  );
}
