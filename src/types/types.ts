// type UserDataType = {
//   name: string;
//   email: string;
//   password: string;
// };
type CustomElement<T = void> = {
  type?: T;
  href?: string;
  classes?: string;
  children?: React.ReactNode | string;
  onClick?: ((e: React.MouseEvent) => void) | null;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | null;
  active?: boolean;
  disable?: boolean;
  [key: string]: any;
};
type FormUserContainerType = {
  // openWindowlhandler: () => (e?: boolean) => (e: React.MouseEvent) => void;
  // closeWindow: (e: React.MouseEvent) => void;
  setTypeForm: () => void;
  typeFormReg: boolean | null;
};
type UserType = {
  user:
    | {
        name: string;
        email: string;
        password: string;
      }
    | boolean;
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

export type {
  CustomElement,
  FormUserContainerType,
  UserType,
  ChildrenType,
  BoxTypes,
  ProductType,
};
