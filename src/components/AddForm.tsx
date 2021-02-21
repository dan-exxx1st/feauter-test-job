import React, { ChangeEvent, FC, useState } from 'react';
import {
  validateEmail,
  validateNumber,
  validatePhoneNumber,
  validateString,
} from '../utils/helpers';
import { ITableData } from '../utils/types';

interface IProps {
  onClick: (data: ITableData) => void;
}

const AddForm: FC<IProps> = (props) => {
  const { onClick } = props;

  const [fieldValues, setFieldsValues] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [error, setError] = useState('');

  const _handleInputChanges = (e: ChangeEvent<HTMLInputElement>) => {
    setError('');
    const tagetName = e.target.name;
    const value = e.target.value;
    setFieldsValues({
      ...fieldValues,
      [tagetName]: value,
    });
  };

  const _handleSubmit = () => {
    const { id, firstName, lastName, email, phone } = fieldValues;
    if (!validateNumber(id)) {
      return setError('ID должен быть числом!');
    }

    if (!validateString(firstName)) {
      return setError('firstName должен содержать только буквы!');
    }

    if (!validateString(lastName)) {
      return setError('lastName должен содержать только буквы!');
    }

    if (!validateEmail(email)) {
      return setError('email введён не корректно!');
    }

    if (!validatePhoneNumber(phone)) {
      return setError('phone введён не корректно!');
    }
    onClick({
      ...fieldValues,
      id: Number(id),
      phone: `(${phone.substring(0, 3)})${phone.substring(
        3,
        6,
      )}-${phone.substring(6, phone.length)}`,
      address: { streetAddress: '', city: '', state: '', zip: '' },
      description: '',
    });
  };

  return (
    <div>
      <table className="add-form">
        <thead>
          <tr>
            <td>id</td>
            <td>firstName</td>
            <td>lastName</td>
            <td>email</td>
            <td>phone</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                className="add-form__field"
                value={fieldValues['id']}
                onChange={_handleInputChanges}
                name="id"
              />
            </td>
            <td>
              <input
                type="text"
                className="add-form__field"
                value={fieldValues['firstName']}
                onChange={_handleInputChanges}
                name="firstName"
              />
            </td>
            <td>
              <input
                type="text"
                className="add-form__field"
                value={fieldValues['lastName']}
                onChange={_handleInputChanges}
                name="lastName"
              />
            </td>
            <td>
              <input
                type="email"
                className="add-form__field"
                value={fieldValues['email']}
                onChange={_handleInputChanges}
                name="email"
              />
            </td>
            <td>
              <input
                type="text"
                className="add-form__field"
                value={fieldValues['phone']}
                onChange={_handleInputChanges}
                name="phone"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="add-form__error">{error}</div>
      <button className="add-form__btn" onClick={_handleSubmit}>
        Добавить
      </button>
    </div>
  );
};

export default AddForm;
