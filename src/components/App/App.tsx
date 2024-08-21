import { useEffect, useState } from "react";

import { Outlet } from "react-router-dom";
import { UserType } from "types/types";
// import Home from "pages/Home/Home";
import Footer from "components/Footer/Footer";
import loginService from "services/login-service";
import Menu from "components/Menu/Menu";
import "assets/styles/_globals.scss";
import "assets/styles/_icons.scss";
import "./App.scss";
import { useScrollBarWidth } from "hooks/useScrollBarWidth";

function App() {
  // console.log(props);
  // const [count, setCount] = useState(0)
  const [dataUser, setDataUser] = useState<UserType>({ user: false });
  const widthScroll = useScrollBarWidth();
  console.log(widthScroll);
  useEffect(() => {
    // console.log("useEffect");
    const { getUser } = new loginService();
    const data = getUser();

    if (data) setDataUser((userData) => ({ ...userData, user: data || false }));
  }, []);

  return (
    <>
      <header style={{ "--widthScroll": widthScroll } as React.CSSProperties}>
        <Menu {...dataUser} />
      </header>
      <main>
        <Outlet />
        {/* <Home /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
