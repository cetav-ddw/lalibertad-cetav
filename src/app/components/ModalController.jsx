'use client';
import React from 'react';
import { useDisclosure } from '@chakra-ui/react';
import Hero from './Hero';
import VideoModal from './ModalVideo';

const ModalController = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Hero onOpen={onOpen} />
      <VideoModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ModalController;
