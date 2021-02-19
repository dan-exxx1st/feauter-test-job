import React, { FC } from 'react';
import { ITableData } from '../utils/types';

interface IProps extends ITableData {
  _selectUser?: (data: ITableData) => void;
}

const TableRow: FC<IProps> = ({ _selectUser, ...props }) => {
  const { id, firstName, lastName, email, phone } = props;

  const _handleClick = () => _selectUser && _selectUser(props);
  return (
    <tr className="table-row" onClick={_handleClick}>
      <td className="table-row__column">{id}</td>
      <td className="table-row__column">{firstName}</td>
      <td className="table-row__column">{lastName}</td>
      <td className="table-row__column">{email}</td>
      <td className="table-row__column">{phone}</td>
    </tr>
  );
};

export default TableRow;
