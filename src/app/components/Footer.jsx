'use client';

import {
  Box,
  Heading,
  Icon,
  Link,
  ListItem,
  Text,
  UnorderedList,
  VisuallyHidden
} from '@chakra-ui/react';
import { Link as NextLink } from 'next/link';
import { FaFacebookSquare } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';


const Footer = () => {
  return (
    <Box as="footer" py="16" bgColor="#313677" borderTop="10px solid #E1E7F8">
      <Box
        as="footer"
        py="16"
        bgColor="#313677"
        textAlign={{ base: "center", md: "flex-start" }}
        mx="auto"
        maxW="1180px"
        display="grid"
        gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
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
            href="https://lalibertadcr.org/"
            _hover={{ opacity: 0.7 }}
          >
            <img
              src="/images/libertad-logo.png"
              alt="Logo La Libertad"
              width="150px"
              height="35px"
            />
          </Link>
        </Box>
        <Box display="grid" gridTemplateColumns="auto auto" gap={2} justifyContent="end">
          <Link
            href="https://www.facebook.com/cetavcr?mibextid=9R9pXO"
            _hover={{ opacity: 0.7 }}
            px={2}
            py="2"
            mx="1"
          >
            <Icon as={FaFacebookSquare} color="#ffffff" w={8} h={8} />
            <VisuallyHidden>Enlace al perfil de Facebook del CETAV</VisuallyHidden>
          </Link>
          <Link
            href="https://instagram.com/cetav_pll?igshid=OGQ5ZDc2ODk2ZA=="
            _hover={{ opacity: 0.7 }}
            px={2}
            py="2"
            mx="1"
          >
            <Icon as={AiFillInstagram} color="#ffffff" w={9} h={9} />
            <VisuallyHidden>Enlace al perfil de Instagram del CETAV</VisuallyHidden>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
