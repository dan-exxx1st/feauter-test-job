import { ITableData } from './types';

export const SortTableData = (
  data: ITableData[],
  activeSort: { id: number; text: string; sort: string },
) => {
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
