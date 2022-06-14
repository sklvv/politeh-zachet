import { IOperation } from "./operationTypes";

export interface IUser {
  isLoading?: boolean;
  isAuth: boolean;
  uid: string;
  operations: IOperation[];
}
