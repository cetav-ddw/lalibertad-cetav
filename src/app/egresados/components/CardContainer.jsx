import React, { useState } from 'react';
import Card from './Card'; 
import ReactPaginate from 'react-paginate';

const ITEMS_PER_PAGE = 25; 

const CardContainer = ({ uniqueRecords }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = Math.ceil(uniqueRecords.length / ITEMS_PER_PAGE);
  const offset = currentPage * ITEMS_PER_PAGE;

  const currentData = uniqueRecords.slice(offset, offset + ITEMS_PER_PAGE);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <div>
      {currentData.map((record) => (
        <Card key={record.id} data={record} />
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
  );
};

export default CardContainer;
