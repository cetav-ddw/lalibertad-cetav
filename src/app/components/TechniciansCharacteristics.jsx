import { Heading, Box, Card, Text } from '@chakra-ui/react';

const TechniciansCharacteristics = () => {
  return (
    <Box
      bgColor="#F2F4FC"
      mx="auto"
      textAlign="center"
      display="flex"
      justifyContent="space-between"
      pt="14"
      pb="14"
      mb="16"
      width="100vw"
      position="relative"
      left="50%"
      transform="translateX(-50.6%)"
    >
      <Card
        bgColor="#CAD4F3B2"
        width="218px"
        height="124px"
        borderRadius="10px"
        marginLeft="200px"
        justifyContent="center"
      >
        <Heading fontSize="lg"> 2 años</Heading>
        <Text fontSize="sm">Tiempo aprox</Text>
      </Card>

      <Card
        bgColor="#CAD4F3B2"
        width="218px"
        height="124px"
        border-radius="10px"
        justifyContent="center"
      >
        <Heading fontSize="lg"> Online</Heading>
        <Text fontSize="sm">Clases</Text>
      </Card>

      <Card
        bgColor="#CAD4F3B2"
        width="218px"
        height="124px"
        border-radius="10px"
        justifyContent="center"
      >
        <Heading fontSize="lg"> 1/11</Heading>
        <Text fontSize="sm">Aplicar en</Text>
      </Card>

      <Card
        bgColor="#CAD4F3B2"
        width="218px"
        height="124px"
        border-radius="10px"
        marginRight="200px"
        justifyContent="center"
      >
        <Heading fontSize="lg"> 1/2</Heading>
        <Text fontSize="sm">Inicio lecciones</Text>
      </Card>
    </Box>
  );
};

export default TechniciansCharacteristics;
