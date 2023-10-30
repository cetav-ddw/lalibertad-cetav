import { Heading, Box, Container, Text, Image } from '@chakra-ui/react';
import Link from 'next/link';

export default function Contacto() {
  return (
    <>
      <Heading as="h1">CONTACTO PAGE</Heading>
      <Container maxW="container.lg" display="flex">
        <Box flex="1" p="20px">
          <Box
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
            mb="20px"
            padding="10px"
            border="1px solid #ccc"
            borderRadius="5px"
          >
            <Text fontSize="18px" fontWeight="bold">
              Facebook:
            </Text>
            <Link
              fontSize="16px"
              color="blue.500"
              href="https://www.facebook.com/cetavcr?mibextid=9R9pXO"
            >
              CETAV - Parque La Libertad
            </Link>
          </Box>
          <Box
            mb="20px"
            padding="10px"
            border="1px solid #ccc"
            borderRadius="5px"
          >
            <Text fontSize="18px" fontWeight="bold">
              Instagram:
            </Text>
            <Link
              fontSize="16px"
              color="blue.500"
              href="https://instagram.com/cetav_pll?igshid=OGQ5ZDc2ODk2ZA=="
            >
              Centro de Tecnología y Artes Visuales PLL
            </Link>
          </Box>
          <Box
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
          <Link href="https://waze.com/ul/hd1u0r8qmk">
            <Image
              src="/images/ubicacionCETAV.png"
              alt="Ubicación CETAV"
              maxW="100%"
              maxH="100%"
            />
          </Link>
        </Box>
      </Container>
    </>
  );
}
