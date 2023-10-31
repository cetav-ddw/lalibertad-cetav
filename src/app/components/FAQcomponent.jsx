import { Box, Heading, Link } from '@chakra-ui/react';

function FAQbox() {
  return (
    <Box
      textAlign="center"
      padding="20px"
      border="1px solid #313677"
      borderRadius="5px"
      mx="auto"
      mb="40px"
    >
      <Heading color="#313677" fontSize="24px">
        ¿Tiene preguntas para nosotros?
      </Heading>

      <Link
        href="/preguntas-frecuentes"
        color="#444444"
        textDecoration="none"
        _hover={{ textDecoration: 'underline' }}
      >
        Resuélvelas en nuestra sección de Preguntas Frecuentes
      </Link>
    </Box>
  );
}

export default FAQbox;
