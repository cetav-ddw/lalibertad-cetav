'use client';

import {
  Box,
  Text,
  Link,
  Heading,
  ListItem,
  Icon,
  UnorderedList,
} from '@chakra-ui/react';
import { Link as NextLink } from 'next/link';
import { MdFacebook } from 'react-icons/md';


const Footer = () => {
  return (
    <Box as="footer" py="16" bgColor="#313677" borderTop="10px solid #E1E7F8">
      <Box
        mx="auto"
        maxW="1180px"
        display="grid"
        gridTemplateColumns="repeat(4, 1fr)"
        gap={4}
        pt="8"
        pb="16"
        borderBottom="2px solid #E1E7F8"
      >
        <Box>
          <Heading as="h3" color="#fff" fontSize="lg" mb="2">
            Conozca más
          </Heading>
          <UnorderedList styleType="none" m="0">
            <ListItem mb="1">
              <Link
                as={NextLink}
                color="#fff"
                _hover={{ textDecoration: 'underline' }}
                fontSize="sm"
                href="/acerca"
              >
                Sobre el CETAV
              </Link>
            </ListItem>
            <ListItem mb="1">
              <Link
                as={NextLink}
                color="#fff"
                _hover={{ textDecoration: 'underline' }}
                fontSize="sm"
                href="/egresados"
              >
                Egresados y egresadas
              </Link>
            </ListItem>
            <ListItem mb="1">
              <Link
                as={NextLink}
                color="#fff"
                _hover={{ textDecoration: 'underline' }}
                fontSize="sm"
                href="/preguntas-frecuentes"
              >
                Preguntas Frecuentes
              </Link>
            </ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Heading as="h3" color="#fff" fontSize="lg" mb="2">
            Carreras
          </Heading>
          <UnorderedList styleType="none" m="0">
            <ListItem mb="1">
              <Link
                as={NextLink}
                color="#fff"
                _hover={{ textDecoration: 'underline' }}
                fontSize="sm"
                href="/tecnicos/dis-y-des-web"
              >
                Diseño y desarrollo web
              </Link>
            </ListItem>
            <ListItem mb="1">
              <Link
                as={NextLink}
                color="#fff"
                _hover={{ textDecoration: 'underline' }}
                fontSize="sm"
                href="/tecnicos/animacion-3d"
              >
                Animación 3D
              </Link>
            </ListItem>
            <ListItem mb="1">
              <Link
                as={NextLink}
                color="#fff"
                fontSize="sm"
                href="/tecnicos/post-produc-audiovisual"
                _hover={{ textDecoration: 'underline' }}
              >
                PostProducción Audiovisual
              </Link>
            </ListItem>
            <ListItem mb="1">
              <Link
                as={NextLink}
                color="#fff"
                fontSize="sm"
                href="/tecnicos/merc-digital-y-diseno"
                _hover={{ textDecoration: 'underline' }}
              >
                Mercadeo Digital y Diseño
              </Link>
            </ListItem>
            <ListItem mb="1">
              <Link
                as={NextLink}
                color="#fff"
                fontSize="sm"
                href="/tecnicos/analisis-y-visuali-de-datos"
                _hover={{ textDecoration: 'underline' }}
              >
                Análisis y Visualización de Datos
              </Link>
            </ListItem>
            <ListItem mb="1">
              <Link
                as={NextLink}
                color="#fff"
                _hover={{ textDecoration: 'underline ' }}
                fontSize="sm"
                href="/tecnicos/ciberseguridad"
              >
                Ciberseguridad
              </Link>
            </ListItem>
            <ListItem mb="1">
              <Link
                as={NextLink}
                color="#fff"
                _hover={{ textDecoration: 'underline ' }}
                fontSize="sm"
                href="/tecnicos/paid-media"
              >
                Paid Media
              </Link>
            </ListItem>
            <ListItem mb="1">
              <Link
                as={NextLink}
                color="#fff"
                fontSize="sm"
                href="/tecnicos/motion-graphics"
                _hover={{ textDecoration: 'underline' }}
              >
                Motion Graphics
              </Link>
            </ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Heading as="h3" color="#fff" fontSize="lg" mb="2">
            ¿Cómo llegar?
          </Heading>
          <Text fontSize="sm" mb="2" color="#fff">
            Parque La Libertad, 300 metros este y 100 metros norte del Palí de
            Fátima, Desamparados.
          </Text>
          <Text fontSize="sm">
            <Link
              as={NextLink}
              color="#fff"
              fontSize="sm"
              _hover={{ textDecoration: 'underline' }}
              href="/contacto"
            >
              Cómo llegar
            </Link>
          </Text>
        </Box>
        <Box>
          <Heading as="h3" color="#fff" fontSize="lg" mb="2">
            Contacto
          </Heading>
          <Text fontSize="sm" color="#fff">
            Teléfono: 2276-9400 ext.2031
          </Text>
          <Text fontSize="sm" color="#fff">
            E-mail: admision.cetav@parquelalibertad.org
          </Text>
        </Box>
      </Box>

      <Box
        mx="auto"
        maxW="1180px"
        display="grid"
        gridTemplateColumns="auto auto"
        gap={14}
        pt="4"
      >
        <Box>
          <Link
            as={NextLink}
            href="/"
            _hover={{ opacity: 0.7 }}
          >
            <img
              src="/images/libertad-logo.png"
              alt="Logo La Libertad"
              width="237px"
              height="108px"
            />
          </Link>
        </Box>
        <Box display="grid" gridTemplateColumns="auto auto" gap={2} position="relative">
          <Box style={{ position: 'absolute', right: '0' }}>
            <Link
              as={NextLink}
              href="https://www.facebook.com/cetavcr?mibextid=9R9pXO"
              _hover={{ opacity: 0.7 }}
              px={4}
              py="2"
              mx="1"
            >
              <Icon as={MdFacebook} color="#ffffff" w={10} h={10} />
            </Link>
          </Box>
          <Box style={{ position: 'absolute', right: '65px' }}>
            <Link
              as={NextLink}
              href="https://instagram.com/cetav_pll?igshid=OGQ5ZDc2ODk2ZA=="
              _hover={{ opacity: 0.7 }}
              px={4}
              py="2"
              mx="1"
            >
              {/* TODO CAMBIAR ICON AL RESPECTIVO DE INSTAGRAM */}
              <Icon as={MdFacebook} color="#ffffff" w={10} h={10} />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
