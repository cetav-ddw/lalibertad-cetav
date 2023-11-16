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
        <Flex
          flex={{ base: '0 1 50%', md: '1 1 300px' }}
          p={{ base: '10px', md: '46px 40px' }}
          bg="#546cd4"
          color="#E1E7F8"
        >
          <Box>
            <Heading fontSize={{ base: '2xmd', md: '2xl' }} mb="10px">
              ¿Deseas iniciar tu carrera técnica con nosotros?
            </Heading>
            <Text fontSize={{ base: 'sm', md: 'lg' }} mb="20px">
              ¡Comienza tu proceso de admisión hoy mismo!
            </Text>
            <Text fontSize={{ base: 'sm', md: 'lg' }}>
              <Link
                display="inline-block"
                textDecoration="underline"
                _hover={{
                  textDecoration: 'none',
                }}
              >
                ¡Inscribite ahora!
              </Link>
            </Text>
          </Box>
        </Flex>
        <Flex
          flex={{ base: '0 1 50%', md: '1 1 300px' }}
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src="/images/inscription-banner-image.png"
            maxW="100%"
            h={{ base: '100%', md: 'auto' }}
            w="100%"
            alt=""
          />
        </Flex>
      </Box>
    </Container>
  );
}
