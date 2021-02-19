import React, { FC } from 'react';
import { ITableData } from '../utils/types';

interface IProps extends ITableData {}

const UserData: FC<IProps> = (props) => {
  const { firstName, lastName, description, address } = props;
  const { streetAddress, city, state, zip } = address;

  return (
    <div className="user-data">
      <p>
        Выбран пользователь <b>{`${firstName} ${lastName}`}</b>
      </p>
      <p>Описание:</p>
      <div>
        <textarea defaultValue={description} />
      </div>
      <p>
        Адрес проживания: <b>{streetAddress}</b>
      </p>
      <p>
        Город: <b>{city}</b>
      </p>
      <p>
        Провинция/штат: <b>{state}</b>
      </p>
      <p>
        Индекс: <b>{zip}</b>
      </p>
    </div>
  );
};

export default UserData;
