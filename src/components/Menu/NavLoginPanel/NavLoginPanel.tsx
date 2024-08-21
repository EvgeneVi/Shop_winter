import { useState } from "react";
import { UserType } from "types/types";
import { FormContainerReg } from "components/shared/Forms";
import Button from "components/shared/Button/Button";
import "./NavLoginPanel.scss";

const NavLoginPanel = ({ user }: UserType) => {
  const [state, setState] = useState({
    openWindow: false,
    typeFormReg: false,
  });
  // console.log(user);
  const setTypeForm = () =>
    setState((prev) => ({ ...prev, typeFormReg: !prev.typeFormReg }));

  const openWindowlhandler =
    (type = false) =>
    (e: React.MouseEvent) => {
      e.preventDefault();
      setState((prev) => ({ typeFormReg: type, openWindow: !prev.openWindow }));
    };
  {
    // console.log(user);
  }
  return (
    <div className="nav-login-panel">
      {user ? (
        <>
          <div className="nav-login-panel__small logined">
            <div></div>
            <span className="logined-text">Здравствуйте,</span>
            <span className="logined-text-name">Евгений</span>
            <button>Выйти</button>
          </div>

          <a
            className="nav-login-panel__desk"
            href="###"
            onClick={(e: React.MouseEvent) =>
              (e.target as HTMLElement).closest("a")?.classList.toggle("active")
            }
          >
            <i className="icon-entry"></i>
            Аккаунт
          </a>

          <div className="drop-account">
            <div>
              <a href="#" className="drop-account_item">
                <i className="icon-login-small"></i>
                <span>Мой Аккаунт</span>
              </a>
            </div>
            <div className="drop-account_item">
              <i className="icon-exit"></i>
              <span>Выйти</span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-login-panel__small entery">
            <span className="entery-text">Личный кабинет</span>
            {/* {console.log(user)} */}
            <Button
              type={"button"}
              classes={"black"}
              onClick={openWindowlhandler()}
            >
              Войти
            </Button>
            <Button
              type={"button"}
              classes={"black-border"}
              onClick={openWindowlhandler(true)}
            >
              Зарегистрироваться
            </Button>
          </div>
          <a
            className="nav-login-panel__desk"
            href="###"
            onClick={openWindowlhandler()}
          >
            <i className="icon-login"></i>
            Войти
          </a>
        </>
      )}
      {state.openWindow && (
        <FormContainerReg
          openWindowlhandler={openWindowlhandler}
          setTypeForm={setTypeForm}
          typeFormReg={state.typeFormReg}
        />
        // </ModalWindow>
      )}
    </div>
  );
};
export default NavLoginPanel;
