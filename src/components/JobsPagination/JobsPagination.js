import React from 'react';
import { Pagination } from 'react-bootstrap' 

export default function JobsPagination({page, setPage, hasNextPage}) {
  
  const adjustPage = (amount) => {setPage(prevPage => prevPage + amount)}

  return (
    <div data-test='JobsPagination-component'>
      <Pagination>
        <span data-test='JobsPagination-back-button'>{page !== 1 && <Pagination.Prev onClick={() =>  adjustPage(-1)}/>}</span>
        <span data-test='JobsPagination-previous-page'>{page !== 1 && <Pagination.Item onClick={() =>  setPage(1)}>1</Pagination.Item>}</span>
        {page > 2 && <Pagination.Ellipsis/> }
        {page > 2 && <Pagination.Item onClick={() =>  adjustPage(-1)}>{page - 1}</Pagination.Item>}
        <span data-test='JobsPagination-current-page'><Pagination.Item active>{page}</Pagination.Item></span>
        <span data-test='JobsPagination-next-page'>{hasNextPage && <Pagination.Item onClick={() =>  adjustPage(1)}>{page + 1}</Pagination.Item>}</span>
        <span data-test='JobsPagination-next-button'>{hasNextPage && <Pagination.Next onClick={() =>  adjustPage(1)}/>}</span>
      </Pagination>
    </div>
  )
}
