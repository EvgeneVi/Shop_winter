import { useEffect, useState } from "react";
import loginService from "../../services/login-service";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import Home from "../../pages/Home/Home";
import "../../assets/styles/_globals.scss";
import "../../assets/styles/_icons.scss";
import "./App.scss";
function App() {
  // const [count, setCount] = useState(0)
  const [user, setUser] = useState(false);
  useEffect(() => {
    // console.log("useEffect");
    const { getUser } = new loginService();
    const data = getUser();
    if (data) setUser((userData) => userData || data);
  }, []);
  return (
    <>
      <header>
        <Menu user={user} />
      </header>
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
