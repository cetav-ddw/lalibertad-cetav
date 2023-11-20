import React from 'react';
import { Flex, IconButton } from '@chakra-ui/react';
import { FaPlay } from 'react-icons/fa';

const HeroPreview = ({ onOpen }) => {
  const posterImageUrl = '/images/poster-CETAV-2023.png';
  const localVideoUrl = '/videos/Reel-CETAV-2023.mp4';

  return (
    <Flex
      mt="-70px"
      mb="50px"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <video
        width="65%"
        loop
        autoPlay
        muted
        style={{
          boxShadow: '0 10px 10px rgba(0, 0, 0, 0.2)',
          borderRadius: '10px',
        }}
        poster={posterImageUrl}
      >
        <source src={localVideoUrl} type="video/mp4" />
      </video>
      <IconButton
        aria-label="Play Video"
        icon={<FaPlay />}
        size="lg"
        //TODO meter este color al theme
        colorScheme="purple"
        variant="outline"
        position="absolute"
        zIndex="2"
        onClick={onOpen}
      />
    </Flex>
  );
};

export default HeroPreview;
