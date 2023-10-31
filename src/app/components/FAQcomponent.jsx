import { Box, Heading, Link } from '@chakra-ui/react';

export default function FaqBanner() {
  return (
    <Box
      textAlign="center"
      padding="20px"
      // TODO agregar color al theme
      border="4px solid #313677"
      borderRadius="5px"
      mx="auto"
      mb="40px"
    >
      {/* TODO agregar color al theme */}
      <Heading as="h3" color="#313677" fontSize="24px">
        ¿Tiene preguntas para nosotros?
      </Heading>
      <Link
        href="/preguntas-frecuentes"
        // TODO agregar color al theme
        color="#444444"
        textDecoration="none"
        _hover={{ textDecoration: 'underline' }}
      >
        Resuélvelas en nuestra sección de Preguntas Frecuentes
      </Link>
    </Box>
  );
}
