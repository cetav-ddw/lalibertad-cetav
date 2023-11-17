'use client';
import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  AspectRatio,
  useDisclosure,
} from '@chakra-ui/react';
import Hero from './Hero';

const VideoModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const vimeoVideoUrl = 'https://player.vimeo.com/video/808341150?h=0d39844605';

  return (
    <>
      <Hero onOpen={onOpen} />
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent maxW="60vw">
          <ModalHeader>Video del CETAV</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AspectRatio ratio={16 / 9}>
              <iframe
                title="video del CETAV"
                src={vimeoVideoUrl}
                style={{
                  borderRadius: '10px',
                  width: '100%',
                  height: '100%',
                }}
              />
            </AspectRatio>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default VideoModal;
