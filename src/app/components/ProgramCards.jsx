'use client';
import {
  Box,
  Text,
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Link,
} from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import SectionHeading from '@/app/components/SectionHeading';

const ProgramCards = () => {
  return (
    <>
      <SectionHeading title="Nuestros programas" />
      <Box
        color="#000000"
        mb="85px"
        h="30rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Card maxW="xs" bg="boxBgColor" mx="4px">
          <Image
            src="/images/tecnicos.jpg"
            alt=""
            borderRadius="lg"
            objectFit="cover"
            h="14rem"
          />
          <CardBody m={0}>
            <Stack my="2" spacing="2">
              <Heading as="h3" size="md">
                Programas técnicos
              </Heading>
              <Text h={180}>
                Formación en áreas del Arte y Tecnología para el empleo.
                Programas enfocados en el desarrollo de competencias técnicas,
                inglés y habilidades socio emocionales.
              </Text>
            </Stack>
          </CardBody>
          <CardFooter
            display="flex"
            justifyContent="center"
            alignItems="center"
            h={7}
          >
            <Link
              href="/tecnicos"
              w="200px"
              background="btnBg"
              dis="flex"
              justifyContent="center"
              alignContent="center"
              borderRadius="5%"
              pos="relative"
              bottom="20px"
              _hover={{
                bg: 'btnHover',
                color: '#FFFFFF',
              }}
            >
              <Text pos="relative" top="8px" left="28px" fontWeight="medium">
                Aprende Más
              </Text>
              <FaArrowRight
                style={{ position: 'relative', left: '155px', bottom: '12px' }}
              />
            </Link>
          </CardFooter>
        </Card>
        <Card maxW="xs" bg="boxBgColor" mx="4px">
          <Image
            src="/images/cursos-libres.jpg"
            alt=""
            borderRadius="lg"
            objectFit="cover"
            h="14rem"
          />
          <CardBody>
            <Stack my="2" spacing="2">
              <Heading as="h3" size="md">
                Cursos Libres de Diseño
              </Heading>
              <Text h={140}>
                Actualización profesional en áreas de diseño y redes sociales,
                ofrecemos los cursos en modalidad presencial y virtual para tu
                beneficio.
              </Text>
            </Stack>
          </CardBody>
          <CardFooter
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Link
              href="/cursos-libres"
              w="200px"
              background="btnBg"
              dis="flex"
              justifyContent="center"
              alignContent="center"
              borderRadius="5%"
              _hover={{
                bg: 'btnHover',
                color: '#FFFFFF',
              }}
            >
              <Text pos="relative" top="8px" left="28px" fontWeight="medium">
                Aprende Más
              </Text>
              <FaArrowRight
                style={{ position: 'relative', left: '155px', bottom: '12px' }}
              />
            </Link>
          </CardFooter>
        </Card>
        <Card maxW="xs" bg="boxBgColor" mx="4px">
          <Image
            src="/images/centrosComputo.jpg"
            alt=""
            borderRadius="lg"
            objectFit="cover"
            h="14rem"
          />
          <CardBody m={0} pos="relative" top="9px">
            <Stack spacing="2">
              <Heading as="h3" size="md">
                Centros de Cómputo
              </Heading>
              <Text h={118}>
                Desarrollo de habilidades en cómputo que abarcan desde la
                navegación hasta el uso de herramientas exigidas por las
                empresas como lo son excel y Power BI, ofrecemos modalidad
                virtual y presencial.
              </Text>
            </Stack>
          </CardBody>
          <CardFooter
            display="flex"
            justifyContent="center"
            alignItems="center"
            mb={10}
          >
            <Link
              href="./cursos-libres/#cursosComputo"
              w="200px"
              background="btnBg"
              dis="flex"
              justifyContent="center"
              alignContent="center"
              pos="relative"
              top="40px"
              borderRadius="5%"
              _hover={{
                bg: 'btnHover',
                color: '#FFFFFF',
              }}
            >
              <Text pos="relative" top="8px" left="28px" fontWeight="medium">
                Aprende Más
              </Text>
              <FaArrowRight
                style={{ position: 'relative', left: '155px', bottom: '12px' }}
              />
            </Link>
          </CardFooter>
        </Card>
      </Box>
    </>
  );
};

export default ProgramCards;
