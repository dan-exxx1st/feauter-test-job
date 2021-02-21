import { ITableData } from './types';

export const SortTableData = (
  data: ITableData[],
  activeSort?: { id: number; text: string; sort: string },
) => {
  if (!activeSort) return data;
  const sortedData = data.sort((a, b) => {
    switch (activeSort.text) {
      case 'id': {
        return activeSort.sort === 'more' ? a.id - b.id : b.id - a.id;
      }

      case 'firstName': {
        if (activeSort.sort === 'more') {
          return a.firstName > b.firstName ? 1 : -1;
        } else {
          return b.firstName > a.firstName ? 1 : -1;
        }
      }

      case 'lastName': {
        if (activeSort.sort === 'more') {
          return a.lastName > b.lastName ? 1 : -1;
        } else {
          return b.lastName > a.lastName ? 1 : -1;
        }
      }

      case 'email': {
        if (activeSort.sort === 'more') {
          return a.email > b.email ? 1 : -1;
        } else {
          return b.email > a.email ? 1 : -1;
        }
      }

      case 'phone': {
        if (activeSort.sort === 'more') {
          return a.phone > b.phone ? 1 : -1;
        } else {
          return b.phone > a.phone ? 1 : -1;
        }
      }

      default: {
        return activeSort.sort === 'more' ? a.id - b.id : b.id - a.id;
      }
    }
  });
  return sortedData;
};

export const validateNumber = (str: string) => str.match(/^[0-9]+$/gm) !== null;
export const validateString = (str: string) =>
  str.match(/^[a-zA-Z]+$/gm) !== null;
export const validateEmail = (str: string) => {
  return str.match(
    // eslint-disable-next-line no-control-regex
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gm,
  );
};

export const validatePhoneNumber = (str: string) =>
  str.length === 10 && str.match(/([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/);
