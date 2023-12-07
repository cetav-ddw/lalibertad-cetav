'use client';

import React, { useState, useEffect } from 'react';
import CardEgresados from './CardEgresados';
import {
  Box,
  SimpleGrid,
  Button,
  HStack,
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

  return (
    <>
      <SimpleGrid columns={isMobile ? 2 : 4} spacing={isMobile ? 2 : 5}>
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
    </>
  );
};

export default CardEgresadosContainer;
