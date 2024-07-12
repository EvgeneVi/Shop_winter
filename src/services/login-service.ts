import type { UserType } from "types/types";

export default class {
  setUser = (data: UserType) => {
    localStorage.setItem("user", JSON.stringify(data));
  };
  getUser = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  };
}
