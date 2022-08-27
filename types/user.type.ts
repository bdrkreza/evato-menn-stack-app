export interface IUser {
  name: string;
  password: string;
}

export type TUser = {
  _id: string;
  name: string;
  email: string;
  cart: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
