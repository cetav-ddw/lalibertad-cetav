'use client';

import React, { useState, useEffect } from 'react';
import CardEgresados from './CardEgresados';
import { Box, SimpleGrid, Button, HStack, useStyleConfig } from '@chakra-ui/react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const ITEMS_PER_PAGE = 25;

const CardEgresadosContainer = ({ uniqueRecords = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);

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

  const buttonStyle = useStyleConfig("Button", {
    size: "sm",
    colorScheme: "blue",
  });

  return (
    <>
      <SimpleGrid columns={5} spacing={5}>
        {currentData.map((record) => (
          <Box key={record.id}>
            <CardEgresados user={record} />
          </Box>
        ))}
      </SimpleGrid>

      <HStack spacing={2} justifyContent="center" mb="10" mt="10">
        <Button
          size="lg"
          onClick={() => goToPage(currentPage - 1)}
          bgColor="white"
          color="#313677"
          disabled={currentPage === 1}
        >
          <MdKeyboardArrowLeft />
        </Button>

        {Array.from({ length: pageCount }, (_, i) => (
          <Button
            key={i}
            size="sm"
            onClick={() => goToPage(i + 1)}
            {...buttonStyle}
            colorScheme={i + 1 === currentPage ? "blue" : "gray"}
            bg={i + 1 === currentPage ? "#313677" : "#546CD4"}
            _hover={{ bg: "blue.300" }}
            _active={{ bg: "blue.700" }}
            borderRadius="50%"
          >
            {i + 1}
          </Button>
        ))}

        <Button
          size="lg"
          onClick={() => goToPage(currentPage + 1)}
          bgColor="white"
          color="#313677"
          disabled={currentPage === pageCount}
        >
          <MdKeyboardArrowRight />
        </Button>
      </HStack>
    </>
  );
};

export default CardEgresadosContainer;
