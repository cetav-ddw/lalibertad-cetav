'use client'
import { Box, Image, Stack, WrapItem, Heading, Link } from '@chakra-ui/react';
//import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, Button } from '@chakra-ui/react';

function YearbookCard({ generationImage, title, yearbookLink, reelLink }) {
  //const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <WrapItem mb="16">
      <Box maxW='350px' borderRadius='14px' overflow='hidden' position='relative'>
        <Image src={`/images/${generationImage}`} alt='' filter='brightness(70%)' objectFit='cover' w="355.22px" h="314px" borderRadius="5px" />

        <Box p='6' position='absolute' bottom='0' left='0'>
          <Heading as="h3" size="md" color="white" mb='2'>
            {title}
          </Heading>
          <Stack direction='row' spacing={4} align='center'>
            <Link target="_blank" fontWeight="500" border='2px' px='4' py='1' backgroundColor='#e1e7f8' color='#313677' borderRadius='19px' borderColor='#313677' href={yearbookLink}>
              Anuario
            </Link>

            <Link target="_blank" fontWeight="500" border='2px' px='4' py='1' backgroundColor='#e1e7f8' color='#313677' borderRadius='19px' borderColor='#313677' href={reelLink}>
              {/*Eliminar este link en caso de utilizar el botón de reel */}
              Reel
            </Link>

            {/*
            <Button fontWeight="500" border='2px' px='4' py='1' backgroundColor='#e1e7f8' color='#313677' borderRadius='19px' borderColor'#313677' onClick={onOpen}>
              Reel
            </Button>
            */}
          </Stack>
        </Box>
      </Box>

      {/* EL modal está inhabilitado temporalmente */}
    
      {/*
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Reel</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <a href={reelLink}>{reelLink}</a>
          </ModalBody>
          <ModalFooter>
            <Stack direction="column" spacing={4} align="center">
              <Button fontWeight="500" border='2px' px='4' py='1' backgroundColor='#e1e7f8' color='#313677' borderRadius='19px' borderColor='#313677' onClick={onClose}>
                Cerrar
              </Button>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
      */}
    </WrapItem>
  );
}

export default YearbookCard;
