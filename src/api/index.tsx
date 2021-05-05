import axios, { AxiosInstance } from 'axios';
import { ITableData } from '../utils/types';

class Api {
  client: AxiosInstance;
  constructor() {
    this.client = axios.create({
      baseURL: 'http://www.filltext.com',
    });
  }

  async getSmallData(): Promise<ITableData[] | Error> {
    try {
      const response = await this.client.get<ITableData[]>(
        '/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}',
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }

  async getBigData(): Promise<ITableData[] | Error> {
    try {
      const response = await this.client.get<ITableData[]>(
        '/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}',
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
}

export default new Api();
