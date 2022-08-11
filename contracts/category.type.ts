export type TCategory = {
  _id: string;
  name: string;
  slug: string;
  children: TCategory[];
};

export interface ICategory {
  success: boolean;
  data: TCategory[];
  error: boolean;
  length: number;
}
