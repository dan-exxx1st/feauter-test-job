import React, { FC, useCallback, useEffect, useState } from 'react';

import Api from '../api';

import { AddForm, Pagination, Table, UserData } from '../components';
import { SortTableData } from '../utils/helpers';
import { ITableData, ITableHeadData, SortType } from '../utils/types';

interface IProps {
  option: string;
}

const TableWithData: FC<IProps> = (props) => {
  const { option } = props;

  const [tableData, setTableData] = useState<ITableData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [addFormOpen, setAddFormOpen] = useState(false);

  const [theadData, setTheadData] = useState<ITableHeadData[]>([
    { id: 1, text: 'id', sort: 'more' },
    { id: 2, text: 'firstName', sort: 'more' },
    { id: 3, text: 'lastName', sort: 'more' },
    { id: 4, text: 'email', sort: 'more' },
    { id: 5, text: 'phone', sort: 'more' },
  ]);

  const [activeSort, setActiveSort] = useState<ITableHeadData | undefined>(
    undefined,
  );

  const [selectedUser, setSelectedUser] = useState<ITableData | null>(null);

  const sortedData = SortTableData(tableData, activeSort);
  const paginatedData =
    pageCount > 0 ? sortedData.slice(page * 50, page * 50 + 50) : sortedData;

  const _handleTheadClick = (id: number, sort: SortType) => {
    setIsLoading(true);
    const thead = theadData.find((thead) => thead.id === id)!;
    const index = theadData.indexOf(thead);
    const isActive = activeSort && activeSort.id === id;
    const newSort = {
      ...thead,
      sort: isActive ? sort : sort === 'more' ? 'less' : 'more',
    };
    const newTheadData = [
      ...theadData.slice(0, index),
      newSort,
      ...theadData.slice(index + 1),
    ];
    setTheadData(newTheadData);
    setActiveSort(newSort);
    setTimeout(() => setIsLoading(false), 1);
  };

  const _handleChangePage = (page: number) => setPage(page);
  const _selectUser = (data: ITableData) => setSelectedUser(data);
  const _handleAddFormOpen = () => setAddFormOpen(!addFormOpen);

  const _handleAddData = (data: ITableData) => {
    setTableData([data, ...tableData]);

    _handleAddFormOpen();
  };

  const fetchData = useCallback(async () => {
    let data: ITableData[] | Error | undefined;
    setError(null);

    if (option === 'small') {
      data = await Api.getSmallData();
    } else if (option === 'big') {
      data = await Api.getBigData();
    }

    if (data instanceof Error) {
      setError(data.message);
    } else if (data) {
      setTableData(data);
      if (data.length > 50) setPageCount(data.length / 50);
    }

    setIsLoading(false);
  }, [option]);

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, [fetchData, option]);

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Oops! Something went wrong and you take error: {error}</div>;
  }

  return (
    <>
      {addFormOpen ? (
        <AddForm onClick={_handleAddData} />
      ) : (
        <button className="table__add-btn" onClick={_handleAddFormOpen}>
          Добавить
        </button>
      )}

      <Table
        data={paginatedData}
        activeSort={activeSort}
        theadData={theadData}
        _handleTheadClick={_handleTheadClick}
        _selectUser={_selectUser}
      />
      {pageCount > 0 ? (
        <Pagination
          pageCount={pageCount}
          activePage={page}
          onClick={_handleChangePage}
        />
      ) : null}
      {selectedUser ? <UserData {...selectedUser} /> : null}
    </>
  );
};

export default TableWithData;
