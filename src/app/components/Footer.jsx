import { Box, Link, Text, Button, Grid, GridItem } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" p={4} bg="gray.100">
      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        <GridItem colSpan={1}>
          <Box display="flex" flexDirection="column">
            <Text fontSize="lg">Conozca más</Text>
            <Link fontSize="sm" href="/about-cetav">
              Sobre el CETAV
            </Link>
            <Link fontSize="sm" href="/egresados">
              Egresados y egresadas
            </Link>
            <Link fontSize="sm" href="/preguntas-frecuentes">
              Preguntas Frecuentes
            </Link>
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box display="flex" flexDirection="column">
            <Text fontSize="lg">Carreras</Text>
            <Link fontSize="sm" href="/tecnicos/dis-y-des-web">
              Diseño y desarrollo web
            </Link>
            <Link fontSize="sm" href="/tecnicos/animacion-3d">
              Animación 3D
            </Link>
            <Link fontSize="sm" href="/tecnicos/post-produc-audiovisual">
              PostProducción Audiovisual
            </Link>
            <Link fontSize="sm" href="/tecnicos/merc-digital-y-diseno">
              Mercadeo Digital y Diseño
            </Link>
            <Link fontSize="sm" href="/tecnicos/analisis-y-visuali-de-datos">
              Análisis y Visualización de Datos
            </Link>
            <Link fontSize="sm" href="/tecnicos/ciberseguridad">
              Ciberseguridad
            </Link>
            <Link fontSize="sm" href="/tecnicos/paid-media">
              Paid Media
            </Link>
            <Link fontSize="sm" href="/tecnicos/motion-graphics">
              Motion Graphics
            </Link>
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box display="flex" flexDirection="column">
            <Text fontSize="lg">¿Cómo llegar?</Text>
            <Text fontSize="sm">
              Parque La Libertad, 300 metros este y 100 metros norte del Palí de
              Fátima, Desamparados
            </Text>
            <Button href="#" colorScheme="blue" size="sm" mt={2}>
              Ve cómo llegar
            </Button>
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box display="flex" flexDirection="column">
            <Text fontSize="lg">Contacto</Text>
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
