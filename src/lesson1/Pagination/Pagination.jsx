import React from "react";
import './Pagination.scss';

import getPaginationArray from '../../utils/getPaginationArray';

const Pagination = ({ totalCount, limit, currentPage, setCurrentPage }) => {

   let pagesArray = getPaginationArray(currentPage, totalCount, limit);

   const handleSetPage = (e) => {
      if (isNaN(e.target.dataset.page)) return;

      setCurrentPage(+e.target.dataset.page);
   };

   return (
      <div className="pagination">
         {pagesArray.map((page) => {
            return <span key={page}
               data-page={page}
               onClick={handleSetPage}
               className={page == currentPage
                  ? "pagination-item current"
                  : 'pagination-item'}
            >
               {page}
            </span>
         })}
      </div>
   )
}

export default Pagination;