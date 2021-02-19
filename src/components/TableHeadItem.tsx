import React, { FC } from 'react';

import { ITableHeadData, SortType } from '../utils/types';

interface IProps extends ITableHeadData {
  onClick?: (id: number, sort: SortType) => void;
  active?: boolean;
}

const TableHeadItem: FC<IProps> = (props) => {
  const { id, text, sort, onClick, active } = props;

  const _handleClick = () => {
    if (onClick) {
      const newSort: SortType = sort === 'more' ? 'less' : 'more';
      onClick(id, newSort);
    }
  };

  const additionalSort = sort === 'less' ? 'less' : '';
  const activeClass = active ? 'active' : '';
  const headClass = `table__data__head ${additionalSort} ${activeClass}`;

  return (
    <td className={headClass} onClick={_handleClick}>
      <span>{text}</span>
      <svg
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        viewBox="0 0 512.002 512.002"
        fill="black"
      >
        <g>
          <g>
            <path
              d="M388.425,241.951L151.609,5.79c-7.759-7.733-20.321-7.72-28.067,0.04c-7.74,7.759-7.72,20.328,0.04,28.067l222.72,222.105
			L123.574,478.106c-7.759,7.74-7.779,20.301-0.04,28.061c3.883,3.89,8.97,5.835,14.057,5.835c5.074,0,10.141-1.932,14.017-5.795
			l236.817-236.155c3.737-3.718,5.834-8.778,5.834-14.05S392.156,245.676,388.425,241.951z"
            />
          </g>
        </g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg>
    </td>
  );
};

export default TableHeadItem;
