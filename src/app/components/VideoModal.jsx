import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  VisuallyHidden,
  AspectRatio,
} from '@chakra-ui/react';

const VideoModal = ({ isOpen, onClose, videoUrl }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent maxW="60vw">
          <ModalHeader>
            <VisuallyHidden>Somos CETAV</VisuallyHidden>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AspectRatio ratio={16 / 9}>
              <iframe
                title="Somos CETAV"
                src={videoUrl}
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
