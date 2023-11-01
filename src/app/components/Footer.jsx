import {
  Box,
  Text,
  Link,
  Heading,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import { Link as NextLink } from 'next/link';

const Footer = () => {
  return (
    <Box as="footer" py="7">
      <Box
        mx="auto"
        maxW="1180px"
        display="grid"
        gridTemplateColumns="repeat(4, 1fr)"
        gap={4}
      >
        <Box>
          <Heading as="h3" fontSize="lg" mb="2">
            Conozca más
          </Heading>
          <UnorderedList styleType="none" m="0">
            <ListItem>
              <Link as={NextLink} fontSize="sm" href="/about-cetav">
                Sobre el CETAV
              </Link>
            </ListItem>
            <ListItem>
              <Link as={NextLink} fontSize="sm" href="/egresados">
                Egresados y egresadas
              </Link>
            </ListItem>
            <ListItem>
              <Link as={NextLink} fontSize="sm" href="/preguntas-frecuentes">
                Preguntas Frecuentes
              </Link>
            </ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Heading as="h3" fontSize="lg" mb="2">
            Carreras
          </Heading>
          <UnorderedList styleType="none" m="0">
            <ListItem>
              <Link as={NextLink} fontSize="sm" href="/tecnicos/dis-y-des-web">
                Diseño y desarrollo web
              </Link>
            </ListItem>
            <ListItem>
              <Link as={NextLink} fontSize="sm" href="/tecnicos/animacion-3d">
                Animación 3D
              </Link>
            </ListItem>
            <ListItem>
              <Link
                as={NextLink}
                fontSize="sm"
                href="/tecnicos/post-produc-audiovisual"
              >
                PostProducción Audiovisual
              </Link>
            </ListItem>
            <ListItem>
              <Link
                as={NextLink}
                fontSize="sm"
                href="/tecnicos/merc-digital-y-diseno"
              >
                Mercadeo Digital y Diseño
              </Link>
            </ListItem>
            <ListItem>
              <Link
                as={NextLink}
                fontSize="sm"
                href="/tecnicos/analisis-y-visuali-de-datos"
              >
                Análisis y Visualización de Datos
              </Link>
            </ListItem>
            <ListItem>
              <Link as={NextLink} fontSize="sm" href="/tecnicos/ciberseguridad">
                Ciberseguridad
              </Link>
            </ListItem>
            <ListItem>
              <Link as={NextLink} fontSize="sm" href="/tecnicos/paid-media">
                Paid Media
              </Link>
            </ListItem>
            <ListItem>
              <Link
                as={NextLink}
                fontSize="sm"
                href="/tecnicos/motion-graphics"
              >
                Motion Graphics
              </Link>
            </ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Heading as="h3" fontSize="lg" mb="2">
            ¿Cómo llegar?
          </Heading>
          <Text fontSize="sm" mb="2">
            Parque La Libertad, 300 metros este y 100 metros norte del Palí de
            Fátima, Desamparados.
          </Text>
          <Text fontSize="sm">
            <Link
              as={NextLink}
              fontSize="sm"
              textDecoration="underline"
              _hover={{ textDecoration: 'none' }}
              href="/contacto"
            >
              Ve cómo llegar
            </Link>
          </Text>
        </Box>
        <Box>
          <Heading as="h3" fontSize="lg" mb="2">
            Contacto
          </Heading>
          <Text fontSize="sm">Teléfono: 2276-9400 ext.2031</Text>
          <Text fontSize="sm">E-mail: admision.cetav@parquelalibertad.org</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
