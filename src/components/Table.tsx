import React, { FC } from 'react';

import { TableHeadItem, TableRow } from '.';

import { ITableData, ITableHeadData, SortType } from '../utils/types';

interface IProps {
  data: ITableData[];
  theadData: ITableHeadData[];
  activeSort?: ITableHeadData;
  _handleTheadClick?: (id: number, sort: SortType) => void;
  _selectUser?: (data: ITableData) => void;
}

const Table: FC<IProps> = (props) => {
  const { data, theadData, activeSort, _handleTheadClick, _selectUser } = props;

  return (
    <div className="table">
      <h2 className="table__title">Данные:</h2>
      <div>
        <table className="table__data">
          <thead>
            <tr>
              {theadData.map((data) => {
                const active = activeSort && data.id === activeSort.id;
                return (
                  <TableHeadItem
                    key={data.id}
                    active={active}
                    onClick={_handleTheadClick}
                    {...data}
                  />
                );
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((data) => (
              <TableRow key={data.email} _selectUser={_selectUser} {...data} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
