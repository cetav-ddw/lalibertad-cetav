'use client';
import { Box, Text, Container, Icon, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { MdCall, MdMail, MdAddToHomeScreen, MdFmdGood } from 'react-icons/md';

export default function ContactDetail() {
  return (
    <Container maxW="container.lg" display="flex">
      <Box flex="1" p="20px">
        <Box
          width="373px"
          mb="20px"
          padding="10px"
          borderRadius="5px"
          // TODO MOVER COLOR AL THEME
          bg="#E1E7F8"
          display="flex"
          flexDirection="column"
          boxShadow="md"
          rounded="md"
        >
          <Box display="flex" alignItems="center">
            <Icon as={MdCall} marginRight="5px" size="24px" color="#313677" />
            {/* TODO MOVER COLOR AL THEME */}
            <Text fontSize="18px" fontWeight="bold" color="#313677">
              Número de teléfono:
            </Text>
          </Box>
          {/* TODO MOVER EL COLOR AL THEME */}
          <Text fontSize="16px" color="#313677">
            2276-9400 ext. 2031
          </Text>
        </Box>

        <Box
          width="373px"
          mb="20px"
          padding="10px"
          borderRadius="5px"
          // TODO MOVER COLOR AL THEME
          bg="#E1E7F8"
          display="flex"
          flexDirection="column"
          boxShadow="md"
          rounded="md"
        >
          <Box display="flex" alignItems="center">
            <Icon as={MdMail} size="24px" color="#313677" marginRight="5px" />
            {/* TODO MOVER COLOR AL THEME */}
            <Text fontSize="18px" fontWeight="bold" color="#313677">
              Correo Eléctronico
            </Text>
          </Box>
          {/* TODO MOVER EL COLOR AL THEME */}
          <Text fontSize="16px" color="#313677">
            admision.cetav@parquelalibertad.org
          </Text>
        </Box>

        <Box
          width="373px"
          mb="20px"
          padding="10px"
          borderRadius="5px"
          // TODO MOVER COLOR AL THEME
          bg="#E1E7F8"
          display="flex"
          flexDirection="column"
          boxShadow="md"
          rounded="md"
        >
          <Box display="flex" alignItems="center">
            <Icon
              as={MdAddToHomeScreen}
              size="24px"
              color="#313677"
              marginRight="5px"
            />
            {/* TODO MOVER COLOR AL THEME */}
            <Text fontSize="18px" fontWeight="bold" color="#313677">
              Facebook
            </Text>
          </Box>
          {/* TODO MOVER COLOR AL THEME */}
          <Link
            fontSize="16px"
            color="#313677"
            href="https://www.facebook.com/cetavcr?mibextid=9R9pXO"
          >
            CETAV - Parque La Libertad
          </Link>
        </Box>

        <Box
          width="373px"
          mb="20px"
          padding="10px"
          borderRadius="5px"
          // TODO MOVER COLOR AL THEME
          bg="#E1E7F8"
          display="flex"
          flexDirection="column"
          boxShadow="md"
          rounded="md"
        >
          <Box display="flex" alignItems="center">
            <Icon
              as={MdAddToHomeScreen}
              size="24px"
              color="#313677"
              marginRight="5px"
            />
            {/* TODO MOVER COLOR AL THEME */}
            <Text fontSize="18px" fontWeight="bold" color="#313677">
              Instagram
            </Text>
          </Box>
          {/* TODO MOVER COLOR AL THEME */}
          <Link
            fontSize="16px"
            color="#313677"
            href="https://instagram.com/cetav_pll?igshid=OGQ5ZDc2ODk2ZA=="
          >
            Centro de Tecnología y Artes Visuales PLL
          </Link>
        </Box>

        <Box
          width="373px"
          mb="20px"
          padding="10px"
          borderRadius="5px"
          // TODO MOVER COLOR AL THEME
          bg="#E1E7F8"
          display="flex"
          flexDirection="column"
          boxShadow="md"
          rounded="md"
        >
          <Box display="flex" alignItems="center">
            <Icon
              as={MdFmdGood}
              size="24px"
              color="#313677"
              marginRight="5px"
            />
            {/* TODO MOVER COLOR AL THEME */}
            <Text fontSize="18px" fontWeight="bold" color="#313677">
              Dirección
            </Text>
          </Box>
          {/* TODO MOVER COLOR AL THEME */}
          <Text fontSize="16px" color="#313677">
            Parque La Libertad, 300 metros este y 100 metros norte del Palí de
            Fátima, Desamparados
          </Text>
        </Box>
      </Box>

      <Box flex="1" display="flex" alignItems="center" justifyContent="center">
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
  );
}
