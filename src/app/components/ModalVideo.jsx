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
  const videoUrl = 'https://player.vimeo.com/video/808341150?h=0d39844605';

  return (
    <>
      <Flex
        mt="60px"
        mb="180px"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <iframe
          src={`${videoUrl}&background=1`}
          width="100%"
          height="300"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
          }}
        />
        <IconButton
          aria-label="Play Video"
          icon={<FaPlay />}
          size="lg"
          //TODO meter este color al theme
          colorScheme="purple"
          variant="outline"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
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
                src={videoUrl}
                style={{
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
