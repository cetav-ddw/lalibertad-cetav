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
      flexDirection={{ base: 'column', lg: 'row' }}
      mb={{ base: '12', md: '24' }}
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex
        flexDirection="column"
        flex="1 0 55%"
        pr="12"
        w={{ base: '90%', xl: '0' }}
        mr={{ base: 'auto', xl: '0' }}
        ml={{ base: 'auto', xl: '0' }}
      >
        <Heading
          as="h1"
          fontSize={{ base: '3xl', md: '4xl' }}
          mb={{ base: '8', md: '0' }}
        >
          <Text>Más acerca de</Text>
          <Text color="#427fdf">Nosotros</Text>
        </Heading>
        <Text fontSize={{ base: 'md', md: 'lg' }} color="#444444">
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
          posterImageUrl={reelsCetav.aboutCetav.posterImageUrl}
          onOpen={onOpen}
        />
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
