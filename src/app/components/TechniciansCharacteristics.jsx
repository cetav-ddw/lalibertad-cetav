import {
  Heading,
  Box,
  Card,
  Text,
  CardHeader,
  CardBody,
} from '@chakra-ui/react';

const CharacteristicsOfTheTechnicians = () => {
  return (
    <Box
      bgColor="#F2F4FC"
      mx="auto"
      justifyContent="center"
      textAlign="center"
      display="grid"
      gridTemplateColumns="repeat(4, 1fr)"
      gap={4}
      pt="9"
      pb="16"
      height="221px"
      mb="40px"
      mt="-50px"
    >
      <Card
        bgColor="#CAD4F3B2"
        width="218px"
        height="124px"
        borderRadius="10px"
      >
        <CardHeader>
          <Heading fontSize="lg"> 2 años</Heading>
        </CardHeader>
        <CardBody>
          <Text fontSize="sm">Tiempo aprox</Text>
        </CardBody>
      </Card>

      <Card
        bgColor="#CAD4F3B2"
        width="218px"
        height="124px"
        border-radius="10px"
      >
        <CardHeader>
          <Heading fontSize="lg"> Online</Heading>
        </CardHeader>
        <CardBody>
          <Text fontSize="sm">Clases</Text>
        </CardBody>
      </Card>

      <Card
        bgColor="#CAD4F3B2"
        width="218px"
        height="124px"
        border-radius="10px"
      >
        <CardHeader>
          <Heading fontSize="lg"> 1/11</Heading>
        </CardHeader>
        <CardBody>
          <Text fontSize="sm">Aplicar en</Text>
        </CardBody>
      </Card>

      <Card
        bgColor="#CAD4F3B2"
        width="218px"
        height="124px"
        border-radius="10px"
      >
        <CardHeader>
          <Heading fontSize="lg"> 1/2</Heading>
        </CardHeader>
        <CardBody>
          <Text fontSize="sm">Inicio lecciones</Text>
        </CardBody>
      </Card>
    </Box>
  );
};

export default CharacteristicsOfTheTechnicians;
