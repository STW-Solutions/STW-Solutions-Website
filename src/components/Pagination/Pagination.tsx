import { useEffect, useState } from "react";
import { PageInfo } from "../../models";
import "./Pagination.css"

interface Props {
  pageInfo: PageInfo;
  onPageInfoChange: (updatedPageInfo: PageInfo) => void;
}

const Pagination = ({ pageInfo, onPageInfoChange }: Props) => {
  const [renderedItems, setRenderedItems] = useState<number[]>([]);
  let renderedItemsList: number[] = [];

  useEffect(() => {
    renderedItemsList = [];
    let counter = 1;
    while (counter <= pageInfo.numberOfPages) {
      renderedItemsList.push(counter)
      counter++;
    }
    setRenderedItems(renderedItemsList);
  }, [pageInfo.numberOfPages]);
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination mx-auto">
        {pageInfo.numberOfPages > 1 && (
          <li className={`page-item ${pageInfo.currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link border-t-0 border-b-0"  aria-label="Previous" onClick={() => 
                {
                    const previousPage = pageInfo.currentPage;
                    pageInfo.previousPage = previousPage;
                    pageInfo.currentPage = previousPage - 1;
                    onPageInfoChange(pageInfo)}
                    }>
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
        )}
        {renderedItems.map((number, i) => (
          <li className="page-item" key={i}>
            <button className={`page-link border-t-0 border-b-0 ${pageInfo.currentPage === i+1 ? 'page-item-active' : ''}`} onClick={() => 
                {
                    pageInfo.previousPage = pageInfo.currentPage;
                    pageInfo.currentPage = number;
                    onPageInfoChange(pageInfo)}
                    }>
              {number}
            </button>
          </li>
        ))}
        {pageInfo.numberOfPages > 1 && (
          <li className={`page-item ${pageInfo.currentPage == pageInfo.numberOfPages ? 'disabled' : ''}`}>
            <button className="page-link border-t-0 border-b-0" aria-label="Next" onClick={() => 
                {
                    const previousPage = pageInfo.currentPage;
                    pageInfo.previousPage = previousPage;
                    pageInfo.currentPage = previousPage + 1;
                    onPageInfoChange(pageInfo)}
                    }>
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
