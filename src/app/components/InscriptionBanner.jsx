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
      mb="16"
    >
      <Box display="flex" flexWrap={'wrap'}>
        <Flex flex="1 1 300px" p="46px 40px" bg="#546cd4" color="#E1E7F8">
          <Box>
            <Heading fontSize="3xl" mb="45px">
              ¿Deseas ser parte de la comunidad CETAV e inscribirte con nosotros?
            </Heading>
            <Text fontSize="2xl">
              {/* TODO PONER LINK AL CORREO  */}
              <Link
                display="inline-block"
                textDecoration="underline"
                _hover={{
                  textDecoration: 'none',
                }}
              >
                ¡Escribínos ahora!
              </Link>
            </Text>
          </Box>
        </Flex>
        <Flex flex="1 1 300px" justifyContent="center" alignItems="center">
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
