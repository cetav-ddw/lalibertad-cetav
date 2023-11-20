'use client';
import { Box, Text, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const CardContent = () => {
  return (
    <>
      <Box
        color="#000000"
        my="50px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <NextLink href="/tecnicos" passHref>
          <Link>
            <Box
              w="350px"
              h="198px"
              border="2px solid #000000"
              backgroundImage="/images/tecnicos.png"
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
              mx="10px"
            >
              <Text
                color="#ffffff"
                pos="relative"
                top="160px"
                left="10px"
                fontSize="22px"
              >
                Programas Técnicos
              </Text>
            </Box>
          </Link>
        </NextLink>

        <NextLink href="/cursos-libres" passHref>
          <Link>
            <Box
              w="350px"
              h="198px"
              border="2px solid #000000"
              backgroundImage="/images/cursosLibres.png"
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
              mx="10px"
            >
              <Text
                color="#ffffff"
                pos="relative"
                top="160px"
                left="10px"
                fontSize="22px"
              >
                Cursos Libres de Diseño
              </Text>
            </Box>
          </Link>
        </NextLink>

        <NextLink href="/cursos-libres/#cursosComputo" passHref>
          <Link>
            <Box
              w="350px"
              h="198px"
              border="2px solid #000000"
              backgroundImage="/images/centrosComputo.png"
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
              mx="10px"
            >
              <Text
                color="#ffffff"
                pos="relative"
                top="160px"
                left="10px"
                fontSize="22px"
              >
                Centros de Cómputo
              </Text>
            </Box>
          </Link>
        </NextLink>
      </Box>
    </>
  );
};

export default CardContent;
