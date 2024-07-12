type UserDataType = {
  name: string;
  email: string;
  password: string;
};
type UserType = {
  user: UserDataType | boolean;
};
type ChildrenType = {
  children?: React.ReactNode;
};

type ProductType = {
  id: number;
  img: string;
  title: string;
  text: string;
  price: number;
  newPrice?: number;
};

interface BoxTypes<Type> {
  [index: string]: Type;
} //Любое свойство с указанным типом (шаблон)

export type { UserType, ChildrenType, BoxTypes, ProductType };
