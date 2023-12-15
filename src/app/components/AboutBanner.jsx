'use client';

import {
  useDisclosure,
  Heading,
  Text,
  Flex,
  IconButton,
  Box,
} from '@chakra-ui/react';
import HeroPreview from '@/app/components/HeroPreview';
import VideoModal from '@/app/components/VideoModal';
import { FaPlay } from 'react-icons/fa';
import reelsCetav from '../content/reels';

const AboutBaner = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      flexDirection={{ base: 'column', md: 'row' }}
      mb={{ base: '12', md: '24' }}
      justifyContent="space-between"
      alignItems="center"
    >
      <Box width={{ base: '90%', md: '48%' }} mb={{ base: '8', md: 0 }}>
        <Heading
          as="h1"
          fontSize={{ base: '3xl', md: '4xl' }}
          mb={{ base: '8', md: '0' }}
        >
          <Text as="span" display="block">
            Más acerca de
          </Text>
          <Text color="#427fdf" as="span" display="block">
            nosotros
          </Text>
        </Heading>
        <Text fontSize={{ base: 'md', md: 'lg' }} color="#444444">
          La educación es la llave que abre las puertas del futuro. Cada día que
          aprendemos y crecemos, construimos los cimientos de un mañana lleno de
          posibilidades ilimitadas. ¡Atrévete a aprender, porque en la educación
          encuentras el poder para dar forma a tu propio destino!
        </Text>
      </Box>
      <Flex
        position="relative"
        justifyContent="center"
        alignItems="center"
        width={{ base: '80%', md: '48%' }}
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
        <HeroPreview posterImageUrl={reelsCetav.aboutCetav.posterImageUrl} />
      </Flex>
      <VideoModal
        isOpen={isOpen}
        onClose={onClose}
        videoUrl={reelsCetav.aboutCetav.videoUrl}
      />
    </Flex>
  );
};

export default AboutBaner;
