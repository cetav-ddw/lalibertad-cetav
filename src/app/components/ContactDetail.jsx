'use client';
import Link from 'next/link';
import { Box, Text, Flex, Icon } from '@chakra-ui/react';
import { MdCall, MdMail, MdAddToHomeScreen, MdFmdGood } from 'react-icons/md';
import LocationMap from './LocationMap';

export default function ContactDetail() {
  return (
    <Flex flexDirection={{ base: 'column', md: 'row' }}>
      <Box
        maxWidth={{ base: '80%', md: '40%' }}
        margin={{ base: 'auto', md: '0' }}
      >
        <Box
          mb="20px"
          px="6"
          py="3"
          borderRadius="5px"
          // TODO MOVER COLOR AL THEME
          bg="#E1E7F8"
          display="flex"
          flexDirection="column"
          boxShadow="md"
        >
          <Box display="flex" alignItems="center" mb="2">
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
          mb="20px"
          px="6"
          py="3"
          borderRadius="5px"
          // TODO MOVER COLOR AL THEME
          bg="#E1E7F8"
          display="flex"
          flexDirection="column"
          boxShadow="md"
        >
          <Box display="flex" alignItems="center" mb="2">
            <Icon as={MdMail} size="24px" color="#313677" marginRight="5px" />
            {/* TODO MOVER COLOR AL THEME */}
            <Text fontSize="18px" fontWeight="bold" color="#313677">
              Correo Eléctronico
            </Text>
          </Box>
          {/* TODO MOVER EL COLOR AL THEME */}
          <Text fontSize="16px" color="#313677">
            admision.cetav@lalibertadcr.org
          </Text>
        </Box>

        <Box
          mb="20px"
          px="6"
          py="3"
          borderRadius="5px"
          // TODO MOVER COLOR AL THEME
          bg="#E1E7F8"
          display="flex"
          flexDirection="column"
          boxShadow="md"
          // TODO mover este color al theme
          _hover={{ bg: '#ccd6f6' }}
          cursor="pointer"
          transition="background-color 0.2s"
        >
          <Box display="flex" alignItems="center" mb="2">
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
          mb="20px"
          px="6"
          py="3"
          borderRadius="5px"
          // TODO MOVER COLOR AL THEME
          bg="#E1E7F8"
          display="flex"
          flexDirection="column"
          boxShadow="md"
          // TODO mover este color al theme
          _hover={{ bg: '#ccd6f6' }}
          cursor="pointer"
          transition="background-color 0.2s"
        >
          <Box display="flex" alignItems="center" mb="2">
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
            @cetav_pll
          </Link>
        </Box>

        <Box
          mb="20px"
          px="6"
          py="3"
          borderRadius="5px"
          // TODO MOVER COLOR AL THEME
          bg="#E1E7F8"
          display="flex"
          flexDirection="column"
          boxShadow="md"
        >
          <Box display="flex" alignItems="center" mb="2">
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

        <Box
          mb="20px"
          px="6"
          py="3"
          borderRadius="5px"
          // TODO MOVER COLOR AL THEME
          bg="#E1E7F8"
          display="flex"
          flexDirection="column"
          boxShadow="md"
          // TODO mover este color al theme
          _hover={{ bg: '#ccd6f6' }}
          cursor="pointer"
          transition="background-color 0.2s"
        >
          <Box display="flex" alignItems="center" mb="2">
            <Icon
              as={MdFmdGood}
              size="24px"
              color="#313677"
              marginRight="5px"
            />
            {/* TODO MOVER COLOR AL THEME */}
            <Text fontSize="18px" fontWeight="bold" color="#313677">
              Waze
            </Text>
          </Box>
          {/* TODO MOVER COLOR AL THEME */}
          <Link
            fontSize="16px"
            color="#313677"
            href="https://waze.com/ul/hd1u0r8qmk"
          >
            Encuéntranos en WAZE
          </Link>
        </Box>
      </Box>

      <Box
        flex="1"
        display="flex"
        alignItems="center"
        mb="2"
        ml={{ base: '0', md: '5' }}
        mt={{ base: '5', md: '14' }}
        justifyContent="center"
        width="100%"
        height="100%"
      >
        <LocationMap />
      </Box>
    </Flex>
  );
}
