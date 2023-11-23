'use client';

import {
  useDisclosure,
  Heading,
  Text,
  Flex,
  IconButton,
} from '@chakra-ui/react';
import HeroPreview from '@/app/components/HeroPreview';
import VideoModal from '@/app/components/VideoModal';
import { FaPlay } from 'react-icons/fa';

const HeroHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      maxW="1180px"
      ml="auto"
      mr="auto"
      flexDirection={{ base: 'column', lg: 'row' }}
    >
      <Flex flexDirection="column" flex="1 0 55%" pr="12">
        <Heading as="h1" fontSize="x-large" mb="4" width="90%" m="auto" p="3">
          Centro de Tecnología y Artes Visuales (CETAV)
        </Heading>
        <Text fontSize="lg" mb="4" textShadow="md" width="90%" m="auto" p="3">
          Somos un centro de formación para el empleo, con nosotros podés
          acceder a programas técnicos y cursos libres para desarrollar tu
          perfil profesional.
        </Text>
        <Text fontSize="lg" textShadow="md" width="90%" m="auto" p="3">
          Creamos alianzas público-privadas para que nuestros cursos sean
          accesibles y nuestra oferta esté alineada a las demandas del mercado.
        </Text>
      </Flex>
      <Flex
        position="relative"
        justifyContent="center"
        alignItems="center"
        width="90%"
        m="auto"
        p="2"
      >
        <IconButton
          aria-label="Play Video"
          icon={<FaPlay />}
          size="lg"
          //TODO meter este color al theme
          variant="outline"
          position="absolute"
          zIndex="2"
          onClick={onOpen}
          color="#7846BF"
        />
        <HeroPreview onOpen={onOpen} />
      </Flex>
      <VideoModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default HeroHeader;
