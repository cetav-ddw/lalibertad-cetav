'use client';

import React, { useState } from 'react';
import CardEgresados from './CardEgresados'; 
import ReactPaginate from 'react-paginate';

const ITEMS_PER_PAGE = 25; 

const CardEgresadosContainer = ({ uniqueRecords = [] }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = Math.ceil(uniqueRecords.length / ITEMS_PER_PAGE);
  const offset = currentPage * ITEMS_PER_PAGE;

  const currentData = uniqueRecords.slice(offset, offset + ITEMS_PER_PAGE);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };
  console.log(uniqueRecords);
  return (
    <>
    <div>
      {currentData.map((record => 
        <CardEgresados key={record.id} user={record} />
      ))}
      <ReactPaginate
        previousLabel={'Anterior'}
        nextLabel={'Siguiente'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </div>
    </>
  );
};

export default CardEgresadosContainer;
