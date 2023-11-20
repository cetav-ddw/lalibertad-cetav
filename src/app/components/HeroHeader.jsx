'use client';
import React from 'react';
import { useDisclosure } from '@chakra-ui/react';
import Hero from './HeroPreview';
import VideoModal from './VideoModal';

const HeroHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Hero onOpen={onOpen} />
      <VideoModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default HeroHeader;
