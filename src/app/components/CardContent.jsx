'use client';
import {
  Box,
  Text,
  Link,
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Button,
  Heading,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import SectionHeading from './SectionHeading';

const CardContent = () => {
  return (
    <>
      <SectionHeading title="Nuestros programas" />
      <Box
        color="#000000"
        mb="50px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Card maxW="xs" h="450px" bg="boxBgColor" mx="4px">
          <Image
            src="/images/tecnicos.jpg"
            alt="Card Tecnicos"
            borderRadius="lg"
            objectFit="cover"
            h="10rem"
          />
          <CardBody>
            <Stack mt="2" spacing="3">
              <Heading size="md">Programas técnicos</Heading>
              <Text>
                Formación en áreas del Arte y Tecnología para el empleo.
                Programas enfocados en el desarrollo de competencias técnicas,
                inglés y habilidades socio emocionales.
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <NextLink href="/tecnicos">
              <Link>
                <Button
                  variant="solid"
                  w="200px"
                  display="flex"
                  justifyContent="space-evenly"
                  _hover={{
                    bg: 'btnHover',
                  }}
                  pos="relative"
                  bottom="15px"
                >
                  <Text>Aprende más</Text>
                  <FaArrowRight />
                </Button>
              </Link>
            </NextLink>
          </CardFooter>
        </Card>
        <Card maxW="xs" h="450px" bg="boxBgColor" mx="4px">
          <Image
            src="/images/cursos-libres.jpg"
            alt="Card Cursos Libres"
            borderRadius="lg"
            objectFit="cover"
            h="10rem"
          />
          <CardBody>
            <Stack mt="2" spacing="3">
              <Heading size="md"> Cursos Libres de Diseño</Heading>
              <Text>
                Actualización profesional en áreas de diseño y redes sociales,
                ofrecemos los cursos en modalidad presencial y virtual para tu
                beneficio.
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <NextLink href="/cursos-libres">
              <Link>
                <Button
                  variant="solid"
                  w="200px"
                  display="flex"
                  justifyContent="space-evenly"
                  _hover={{
                    bg: 'btnHover',
                  }}
                  pos="relative"
                  top="3px"
                >
                  <Text>Aprende más</Text>
                  <FaArrowRight />
                </Button>
              </Link>
            </NextLink>
          </CardFooter>
        </Card>
        <Card maxW="xs" h="450px" bg="boxBgColor" mx="4px">
          <Image
            src="/images/centrosComputo.jpg"
            alt="Card Centros de Computo"
            borderRadius="lg"
            objectFit="cover"
            h="10rem"
          />
          <CardBody>
            <Stack mt="1" spacing="3">
              <Heading size="md">Centros de Cómputo</Heading>
              <Text>
                Desarrollo de habilidades en cómputo que abarcan desde la
                navegación hasta el uso de herramientas exigidas por las
                empresas como lo son excel y Power BI, ofrecemos modalidad
                virtual y presencial.
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <NextLink href="/cursos-libres/#cursosComputo">
              <Link>
                <Button
                  variant="solid"
                  w="200px"
                  display="flex"
                  justifyContent="space-evenly"
                  _hover={{
                    bg: 'btnHover',
                  }}
                  pos="relative"
                  bottom="35px"
                >
                  <Text>Aprende más</Text>
                  <FaArrowRight />
                </Button>
              </Link>
            </NextLink>
          </CardFooter>
        </Card>
      </Box>
    </>
  );
};

export default CardContent;
