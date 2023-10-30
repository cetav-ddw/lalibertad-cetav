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
        <Flex flex="1" p="54px 40px" bg="#546cd4" color="#E1E7F8">
          <Box>
            <Heading fontSize="34px" mb="10px">
              ¿Deseas iniciar tu carrera técnica con nosotros?
            </Heading>
            <Text fontSize="22px" mb="20px">
              ¡Comienza tu proceso de admisión hoy mismo!
            </Text>
            <Link
              display="inline-block"
              textDecoration="none"
              _after={{
                content: '""',
                display: 'block',
                w: '100%',
                h: '2px',
                bg: '#fff',
                transition: 'background-color 0.2s ease-in-out',
              }}
              _hover={{
                _after: {
                  bg: '#6739A7',
                },
              }}
            >
              ¡Inscribite ahora!
            </Link>
          </Box>
        </Flex>
        <Flex flex="1" justifyContent="center" alignItems="center">
          <Image
            src="https://static.vecteezy.com/system/resources/previews/002/073/525/non_2x/human-using-a-computer-to-work-and-communicate-free-photo.jpg"
            alt="Carrera Técnica"
            maxW="100%"
            h="auto"
            w="100%"
          />
        </Flex>
      </Box>
    </Container>
  );
}
