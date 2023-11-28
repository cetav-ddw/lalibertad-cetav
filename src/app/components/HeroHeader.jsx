'use client';

import { useDisclosure } from '@chakra-ui/react';
import HeroPreview from '@/app/components/HeroPreview';
import VideoModal from '@/app/components/VideoModal';

const HeroHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HeroPreview onOpen={onOpen} />
      <VideoModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default HeroHeader;
