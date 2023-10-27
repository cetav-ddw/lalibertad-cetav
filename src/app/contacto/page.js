import { Heading, Box, Container, Text, Image } from '@chakra-ui/react';

export default function Contacto() {
  return (
    <>
      <Heading as="h1">CONTACTO PAGE</Heading>
      <Container maxW="container.lg" display="flex">
        <Box flex="1" p="20px">
          <Box
            as="div"
            mb="20px"
            padding="10px"
            border="1px solid #ccc"
            borderRadius="5px"
          >
            <Text fontSize="18px" fontWeight="bold">
              Número de teléfono:
            </Text>
            <Text fontSize="16px">2276-9400 ext. 2031</Text>
          </Box>
          <Box
            as="div"
            mb="20px"
            padding="10px"
            border="1px solid #ccc"
            borderRadius="5px"
          >
            <Text fontSize="18px" fontWeight="bold">
              Correo electrónico:
            </Text>
            <Text fontSize="16px">admision.cetav@parquelalibertad.org</Text>
          </Box>
          <Box
            as="div"
            mb="20px"
            padding="10px"
            border="1px solid #ccc"
            borderRadius="5px"
          >
            <Text fontSize="18px" fontWeight="bold">
              Facebook:
            </Text>
            <Text fontSize="16px">CETAV - Parque La Libertad</Text>
          </Box>
          <Box
            as="div"
            mb="20px"
            padding="10px"
            border="1px solid #ccc"
            borderRadius="5px"
          >
            <Text fontSize="18px" fontWeight="bold">
              Instagram:
            </Text>
            <Text fontSize="16px">
              Centro de Tecnología y Artes Visuales PLL
            </Text>
          </Box>
          <Box
            as="div"
            mb="20px"
            padding="10px"
            border="1px solid #ccc"
            borderRadius="5px"
          >
            <Text fontSize="18px" fontWeight="bold">
              Dirección:
            </Text>
            <Text fontSize="16px">
              Parque La Libertad, 300 metros al este y 100 metros al norte del
              Pali de Fátima, Desamparados.
            </Text>
          </Box>
        </Box>
        <Box
          flex="1"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src="https://s3.abcstatics.com/abc/www/multimedia/tecnologia/2023/07/05/google-maps-RFfUcrluIkVKvIHstSe1oHI-1200x840@abc.jpg"
            alt="Ubicación CETAV"
            maxW="100%"
            maxH="100%"
          />
        </Box>
      </Container>
    </>
  );
}
