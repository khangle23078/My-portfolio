import { IDescription } from './description';

export interface IExperience {
  id: number;
  role: string;
  company_name: string;
  address: string;
  date: string;
  description: IDescription[];
}
