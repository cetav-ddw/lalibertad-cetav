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
  Flex,
  IconButton,
} from '@chakra-ui/react';
import { FaPlay } from 'react-icons/fa';

const VideoModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const posterImageUrl = '/images/poster-CETAV-2023.png';
  const localVideoUrl = '/videos/Reel-CETAV-2023.mp4';
  const vimeoVideoUrl = 'https://player.vimeo.com/video/808341150?h=0d39844605';

  return (
    <>
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
