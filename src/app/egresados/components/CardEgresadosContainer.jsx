'use client';

import React, { useState } from 'react';
import CardEgresados from './CardEgresados';
import ReactPaginate from 'react-paginate';
import { Box, Flex, SimpleGrid } from '@chakra-ui/react';

const ITEMS_PER_PAGE = 25;

const CardEgresadosContainer = ({ uniqueRecords = [] }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = Math.ceil(uniqueRecords.length / ITEMS_PER_PAGE);
  const offset = currentPage * ITEMS_PER_PAGE;

  const currentData = uniqueRecords.slice(offset, offset + ITEMS_PER_PAGE);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };
  return (
    <>
      <SimpleGrid columns={5} spacing={5}>
        {currentData.map((record) => (
          <Box key={record.id}>
            <CardEgresados user={record} />
          </Box>
        ))}
      </SimpleGrid>
      <Flex justifyContent="center" mt={4}>
        <ReactPaginate
          previousLabel={'< Anterior'}
          nextLabel={'Siguiente >'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={10}
          onPageChange={handlePageClick}
          containerClassName={'egrsadosCardContainer__Pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
          renderOnZeroPageCount={null}
          style={{
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'center',
            margin: 0,
            padding: 0,
          }}
        />
      </Flex>
    </>
  );
};

export default CardEgresadosContainer;
