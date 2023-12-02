'use client';

import React, { useState, useEffect } from 'react';
import CardEgresados from './CardEgresados';
import {
  Box,
  SimpleGrid,
  Button,
  HStack,
  useStyleConfig,
  useBreakpointValue,
  Icon,
} from '@chakra-ui/react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const ITEMS_PER_PAGE_MOBILE = 26;
const ITEMS_PER_PAGE_DESKTOP = 16;

const CardEgresadosContainer = ({ uniqueRecords = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const isMobile = useBreakpointValue({ base: true, sm: false });
  const ITEMS_PER_PAGE = isMobile
    ? ITEMS_PER_PAGE_MOBILE
    : ITEMS_PER_PAGE_DESKTOP;

  const pageCount = Math.ceil(uniqueRecords.length / ITEMS_PER_PAGE);
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = uniqueRecords.slice(offset, offset + ITEMS_PER_PAGE);

  const goToPage = (page) => {
    if (page >= 1 && page <= pageCount) {
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [uniqueRecords]);

  const buttonStyle = useStyleConfig('Button', {
    size: isMobile ? 'sm' : 'lg',
    colorScheme: 'blue',
  });

  return (
    <Box
      maxW={{ base: 'xs', md: 'xl', lg: '100%' }}
      m="auto"
      mb={{ base: 1, md: 3 }}
      mt={{ base: 1, md: 3 }}
    >
      <SimpleGrid
        width="98%"
        margin={{ base: 'auto', md: 0 }}
        columns={{ base: 2, lg: 4 }}
        spacing={{ base: 2, lg: 5 }}
      >
        {currentData.map((record) => (
          <Box key={record.id}>
            <CardEgresados user={record} />
          </Box>
        ))}
      </SimpleGrid>

      <HStack spacing={2} justifyContent="center" mb="10" mt="10">
        {currentPage > 1 && (
          <Button
            size={{ base: 'xs', lg: 'md' }}
            onClick={() => goToPage(currentPage - 1)}
            bgColor="white"
            color="#313677"
          >
            <Icon as={MdKeyboardArrowLeft} boxSize={10} />
          </Button>
        )}

        {Array.from({ length: pageCount }, (_, i) => (
          <Button
            key={i}
            size={{ base: 'xs', lg: 'md' }}
            onClick={() => goToPage(i + 1)}
            {...buttonStyle}
            colorScheme={i + 1 === currentPage ? 'blue' : 'gray'}
            bg={i + 1 === currentPage ? '#313677' : '#546CD4'}
            _hover={{ bg: 'blue.300' }}
            _active={{ bg: 'blue.700' }}
            borderRadius="100%"
            fontSize="sm"
          >
            {i + 1}
          </Button>
        ))}

        {currentPage < pageCount && (
          <Button
            size={{ base: 'xs', md: 'md' }}
            onClick={() => goToPage(currentPage + 1)}
            bgColor="white"
            color="#313677"
          >
            <Icon as={MdKeyboardArrowRight} boxSize={10} />
          </Button>
        )}
      </HStack>
    </Box>
  );
};

export default CardEgresadosContainer;
