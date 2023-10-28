import { Box, Link, Image } from '@chakra-ui/react';
import { Link as NextLink } from 'next/link';

const Navigation = () => {
  return (
    <Box
      as="nav"
      display="flex"
      alignItems="center"
      p={4}
      justifyContent="space-between"
    >
      <Box display="flex" flex="1" justifyContent="center">
        <Image src="/logo.png" alt="" h={8} w={8} mr={4} />

        <Link
          as={NextLink}
          href="/"
          color="white"
          _hover={{ color: 'white' }}
          mr={4}
        >
          Inicio
        </Link>
        <Link
          as={NextLink}
          href="/cursos-libres"
          color="white"
          _hover={{ color: 'white' }}
          mr={4}
        >
          Cursos Libres
        </Link>
        <Link
          as={NextLink}
          href="/tecnicos"
          color="white"
          _hover={{ color: 'white' }}
          mr={4}
        >
          Cursos Técnicos
        </Link>
        <Link
          as={NextLink}
          href="/about-cetav"
          color="white"
          _hover={{ color: 'white' }}
          mr={4}
        >
          Sobre Nosotros
        </Link>
        <Link
          as={NextLink}
          href="/egresados"
          color="white"
          _hover={{ color: 'white' }}
          mr={4}
        >
          Egresados
        </Link>
        <Link
          as={NextLink}
          href="/preguntas-frecuentes"
          color="white"
          _hover={{ color: 'white' }}
          mr={4}
        >
          FAQ
        </Link>
        <Link
          as={NextLink}
          href="/contacto"
          color="white"
          _hover={{ color: 'white' }}
        >
          Contacto
        </Link>
      </Box>
    </Box>
  );
};

export default Navigation;
