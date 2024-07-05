export default class {
  setUser = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
  };
  getUser = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  };
}
