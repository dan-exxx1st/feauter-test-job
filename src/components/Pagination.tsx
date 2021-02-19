import React, { FC, useEffect, useState } from 'react';

interface IProps {
  pageCount: number;
  activePage: number;
  onClick: (page: number) => void;
}

const Pagination: FC<IProps> = (props) => {
  const { pageCount, activePage, onClick } = props;
  const [paginationList, setPaginationList] = useState<Array<number>>([]);

  useEffect(() => {
    const paginations: Array<number> = [];
    for (let i = 0; i < pageCount; i++) {
      paginations.push(i);
    }

    setPaginationList(paginations);
  }, [pageCount]);

  return (
    <div className="pagination">
      {paginationList.map((pag) => {
        const activeClass = pag === activePage ? 'active' : '';

        return (
          <div
            className={`pagination__button ${activeClass}`}
            key={pag}
            onClick={() => onClick(pag)}
          >
            {pag + 1}
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;
