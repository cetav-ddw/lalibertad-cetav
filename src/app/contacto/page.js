import { Heading, Box, Container, Text, Image } from '@chakra-ui/react';
import Link from 'next/link';
import colors from '@/theme/foundations/colors';

export default function Contacto() {
  return (
    <>
      <Box textAlign="center" padding="50">
        <Heading as="h1">
          Nuestra Información
          <br />
          <Text color={colors.blueHighlightColor}>de Contacto</Text>
        </Heading>
      </Box>
      <Container maxW="container.lg" display="flex">
        <Box flex="1" p="20px">
          <Box
            mb="20px"
            padding="10px"
            borderRadius="5px"
            bg={colors.boxBgColor}
            display="flex"
            flexDirection="column"
          >
            <Box display="flex">
              <Image
                src="/images/Icon-phone.svg"
                alt="Phone Icon"
                style={{ marginRight: '10px' }}
              />
              <Text fontSize="18px" fontWeight="bold" color={colors.textColor}>
                Número de teléfono:
              </Text>
            </Box>
            <Text fontSize="16px" color={colors.textColor}>
              2276-9400 ext. 2031
            </Text>
          </Box>

          <Box
            mb="20px"
            padding="10px"
            borderRadius="5px"
            bg={colors.boxBgColor}
            display="flex"
            flexDirection="column"
          >
            <Box display="flex">
              <Image
                src="/images/Icon-mail.svg"
                alt="Mail Icon"
                style={{ marginRight: '10px' }}
              />
              <Text fontSize="18px" fontWeight="bold" color={colors.textColor}>
                Correo Eléctronico
              </Text>
            </Box>
            <Text fontSize="16px" color={colors.textColor}>
              admision.cetav@parquelalibertad.org
            </Text>
          </Box>

          <Box
            mb="20px"
            padding="10px"
            borderRadius="5px"
            bg={colors.boxBgColor}
            display="flex"
            flexDirection="column"
          >
            <Box display="flex">
              <Image
                src="/images/Icon-socialMedia.svg"
                alt="Social Media Icon"
                style={{ marginRight: '10px' }}
              />
              <Text fontSize="18px" fontWeight="bold" color={colors.textColor}>
                Facebook
              </Text>
            </Box>
            <Link
              fontSize="16px"
              color={colors.textColor}
              href="https://www.facebook.com/cetavcr?mibextid=9R9pXO"
            >
              CETAV - Parque La Libertad
            </Link>
          </Box>

          <Box
            mb="20px"
            padding="10px"
            borderRadius="5px"
            bg={colors.boxBgColor}
            display="flex"
            flexDirection="column"
          >
            <Box display="flex">
              <Image
                src="/images/Icon-socialMedia.svg"
                alt="Social Media Icon"
                style={{ marginRight: '10px' }}
              />
              <Text fontSize="18px" fontWeight="bold" color={colors.textColor}>
                Instagram
              </Text>
            </Box>
            <Link
              fontSize="16px"
              color={colors.textColor}
              href="https://instagram.com/cetav_pll?igshid=OGQ5ZDc2ODk2ZA=="
            >
              Centro de Tecnología y Artes Visuales PLL
            </Link>
          </Box>

          <Box
            mb="20px"
            padding="10px"
            borderRadius="5px"
            bg={colors.boxBgColor}
            display="flex"
            flexDirection="column"
          >
            <Box display="flex">
              <Image
                src="/images/Icon-location.svg"
                alt="Location Icon"
                style={{ marginRight: '10px' }}
              />
              <Text fontSize="18px" fontWeight="bold" color={colors.textColor}>
                Dirección
              </Text>
            </Box>
            <Text fontSize="16px" color={colors.textColor}>
              Parque La Libertad, 300 metros este y 100 metros norte del Palí de
              Fátima, Desamparados
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
