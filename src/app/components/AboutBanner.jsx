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
import reelsCetav from '../content/reels';

const AboutBaner = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      maxW={{ base: '90%', lg: '1180px' }}
      ml="auto"
      mr="auto"
      flexDirection={{ base: 'column', lg: 'row' }}
    >
      <Flex flexDirection="column" flex="1 0 55%" pr="12">
        <Heading as="h1" fontSize={{ base: '3xl', md: '4xl' }} mb="2">
          <Text>Más acerca de</Text>
          <Text color="#427fdf">Nosotros</Text>
        </Heading>
        <Text fontSize={{ base: 'md', md: 'lg' }} color="#444444" mt="2">
          La educación es la llave que abre las puertas del futuro. Cada día que
          aprendemos y crecemos, construimos los cimientos de un mañana lleno de
          posibilidades ilimitadas. ¡Atrévete a aprender, porque en la educación
          encuentras el poder para dar forma a tu propio destino!
        </Text>
      </Flex>
      <Flex
        position="relative"
        justifyContent="center"
        alignItems="center"
        width="90%"
        ml="auto"
        mr="auto"
        mt="4"
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
        <HeroPreview
          localVideo={reelsCetav.aboutCetav.locaVideo}
          poster={reelsCetav.aboutCetav.poster}
          onOpen={onOpen}
        />
      </Flex>
      <VideoModal
        isOpen={isOpen}
        onClose={onClose}
        VideoModal={reelsCetav.aboutCetav.videoModal}
      />
    </Flex>
  );
};

export default AboutBaner;
