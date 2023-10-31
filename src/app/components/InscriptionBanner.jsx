import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Link,
  Image,
} from '@chakra-ui/react';

export default function InscriptionBanner() {
  return (
    <Container
      maxW="container.lg"
      display="flex"
      justifyContent="center"
      alignItems="center"
      h="100vh"
    >
      <Box borderWidth="1px" display="flex" maxW="1000px">
        <Flex flex="1" p="46px 40px" bg="#546cd4" color="#E1E7F8">
          <Box>
            <Heading fontSize="34px" mb="10px">
              ¿Deseas iniciar tu carrera técnica con nosotros?
            </Heading>
            <Text fontSize="22px" mb="20px">
              ¡Comienza tu proceso de admisión hoy mismo!
            </Text>
            <Link display="inline-block" textDecoration="underline">
              ¡Inscribite ahora!
            </Link>
          </Box>
        </Flex>
        <Flex flex="1" justifyContent="center" alignItems="center">
          <Image
            src="/images/inscription-banner-image.png"
            maxW="100%"
            h="auto"
            w="100%"
            alt=""
          />
        </Flex>
      </Box>
    </Container>
  );
}
