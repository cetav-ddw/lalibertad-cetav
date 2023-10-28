import { Wrap, WrapItem, Heading, Center, Box, Text } from '@chakra-ui/react';
import ImageCard from './components/ImageCard/ImageCard';

export default function Home() {
  return (
    <div>
      <Heading as="h1">HOME page</Heading>
      <Box mt="16" mb="10">
        <Center>
          <Text mb="20" fontWeight="700" fontSize="50px">
            Nuetras Carreras Técnicas
          </Text>
        </Center>
        <Wrap spacing="30px" justify="center">
          <WrapItem>
            <ImageCard
              src="dis-des-web.jpg"
              alt="diseño y desarrollo web image"
              text="Diseño y Desarrollo Web"
            />
          </WrapItem>
          <WrapItem>
            <ImageCard
              src="marketing-digital.jpg"
              alt="mercadeo digital y diseño image"
              text="Mercadeo Digital y Diseño"
            />
          </WrapItem>
          <WrapItem>
            <ImageCard
              src="animacion-3d.jpg"
              alt="animacion 3d image"
              text="Animación 3D"
            />
          </WrapItem>
          <WrapItem>
            <ImageCard
              src="dis-des-web.jpg"
              alt="diseño y desarrollo web image"
              text="Ciberseguridad"
            />
          </WrapItem>
          <WrapItem>
            <ImageCard
              src="dis-des-web.jpg"
              alt="diseño y desarrollo web image"
              text="Motion Graphics"
            />
          </WrapItem>
          <WrapItem>
            <ImageCard
              src="dis-des-web.jpg"
              alt="diseño y desarrollo web image"
              text="Paid Media"
            />
          </WrapItem>
          <WrapItem>
            <ImageCard
              src="dis-des-web.jpg"
              alt="diseño y desarrollo web image"
              text="Post-Producción Audiovisual"
            />
          </WrapItem>
          <WrapItem>
            <ImageCard
              src="dis-des-web.jpg"
              alt="diseño y desarrollo web image"
              text="Analisis y Visualizacion de Datos"
            />
          </WrapItem>
        </Wrap>
      </Box>
    </div>
  );
}
