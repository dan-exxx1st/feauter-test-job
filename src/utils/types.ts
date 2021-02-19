export type SortType = 'more' | 'less';

export interface ITableData {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: {
    streetAddress: string;
    city: string;
    state: string;
    zip: string;
  };
  description: string;
}

export interface ITableHeadData {
  id: number;
  text: string;
  sort: SortType;
}
