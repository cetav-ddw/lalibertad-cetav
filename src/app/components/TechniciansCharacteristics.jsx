import { Heading, Box, Card, Text } from '@chakra-ui/react';

const TechniciansCharacteristics = () => {
  return (
<Box
  bgColor="#F2F4FC"
  mx="auto"
  textAlign="center"
  display="grid"
  gridTemplateColumns={{ base: "1fr 1fr", md: "1fr 1fr 1fr 1fr" }} // 2 columnas en dispositivos móviles y más
  gap={{ base: "8px", md: "12px" }} // Espaciado entre las tarjetas
  padding={{ base: '40px', md: '100px'}}
  pt="14"
  pb="14"
  mb="16"
  width="100vw"
  position="relative"
  left="50%"
  transform="translateX(-50.6%)"
>
  <Card bgColor="#CAD4F3B2" height="124px" borderRadius="10px" justifyContent="center">
    <Heading fontSize="lg" color='#313677'>2 años</Heading>
    <Text fontSize="sm" color='rgba(49, 54, 119, 0.55);'>Tiempo aprox</Text>
  </Card>

  <Card bgColor="#CAD4F3B2" height="124px" borderRadius="10px" justifyContent="center">
    <Heading fontSize="lg" color='#313677'>Online</Heading>
    <Text fontSize="sm"  color='rgba(49, 54, 119, 0.55);'>Clases</Text>
  </Card>

  <Card bgColor="#CAD4F3B2" height="124px" borderRadius="10px" justifyContent="center">
    <Heading fontSize="lg" color='#313677'>1/11</Heading>
    <Text fontSize="sm"  color='rgba(49, 54, 119, 0.55);'>Aplicar en</Text>
  </Card>

  <Card bgColor="#CAD4F3B2" height="124px" borderRadius="10px" justifyContent="center">
    <Heading fontSize="lg" color='#313677'>1/2</Heading>
    <Text fontSize="sm"  color='rgba(49, 54, 119, 0.55);'>Inicio lecciones</Text>
  </Card>
</Box>
  );
};

export default TechniciansCharacteristics;
