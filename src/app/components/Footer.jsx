import { Box, Text, Grid, GridItem, Link, Heading } from '@chakra-ui/react';
import { Link as NextLink } from 'next/link';
import { List, ListItem, UnorderedList} from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box as="footer" p={4} bg="gray.100" mx="auto" maxW="1180px">
      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        <GridItem colSpan={1}>
          <Box display="flex" flexDirection="column">
            <Heading as="h3" size="lg">Conozca más</Heading>
            <List>
              <UnorderedList styleType="none">
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
              </List>
          </Box>
        </GridItem>

        <GridItem colSpan={1}>
          <Box display="flex" flexDirection="column">
            <Heading as="h3" size="lg">Carreras</Heading>
            <List>
              <UnorderedList styleType="none">
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
                <Link as={NextLink} fontSize="sm" href="/tecnicos/post-produc-audiovisual">
                  PostProducción Audiovisual
                </Link>
              </ListItem>
              <ListItem>
                <Link as={NextLink} fontSize="sm" href="/tecnicos/merc-digital-y-diseno">
                  Mercadeo Digital y Diseño
                </Link>
              </ListItem>
              <ListItem>
                <Link as={NextLink} fontSize="sm" href="/tecnicos/analisis-y-visuali-de-datos">
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
              <ListItem>F
                <Link as={NextLink} fontSize="sm" href="/tecnicos/motion-graphics">
                  Motion Graphics
                </Link>
              </ListItem>
              </UnorderedList>
            </List>
          </Box>
        </GridItem>

        <GridItem colSpan={1}>
          <Box display="flex" flexDirection="column">
            <Heading as="h3" size="lg">¿Cómo llegar?</Heading>
            <Text fontSize="sm">
              Parque La Libertad, 300 metros este y 100 metros norte del Palí de Fátima, Desamparados.
            </Text>
            <Link as={NextLink} fontSize="sm" bg="gray.500" href="/contacto">
              Ve cómo llegar
            </Link>
          </Box>
        </GridItem>

        <GridItem colSpan={1}>
          <Box display="flex" flexDirection="column">
            <Heading as="h3" size="lg">Contacto</Heading>
            <Text fontSize="sm">Teléfono: 2276-9400 ext.2031</Text>
            <Text fontSize="sm">
              E-mail: admision.cetav@parquelalibertad.org
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Footer;
