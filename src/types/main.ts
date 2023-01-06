export interface Item {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: Date;
  updatedAt: Date;
  category: Category;
}

export interface Category {
  id: number;
  name: CategoryName;
  image: string;
  creationAt: Date;
  updatedAt: Date;
}

export enum CategoryName {
  ChangeTitle = 'Change title',
  Clothes = 'Clothes',
  Electronics1 = 'Electronics1',
  Others = 'Others',
  Shoes = 'Shoes',
}
