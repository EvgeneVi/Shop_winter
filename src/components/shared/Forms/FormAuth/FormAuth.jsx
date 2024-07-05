import "./FormAuth.scss";
import CloseBtn from "../../ModalWindowComponents/CloseBtn/CloseBtn";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
export default function FormAuth(props) {
  const {
    restorePass,
    forgotPassAction,
    openWindowlhandler,
    timer,
    startTimer,
    setTypeForm,
    typeFormReg,
  } = props;

  const { start, time } = timer;

  return (
    <div
      className={`dialog-form ${typeFormReg ? "active" : ""}${
        restorePass ? "small" : ""
      }`}
    >
      <div className="types-form">
        <Button
          type={"button"}
          classes={"auth"}
          onClick={typeFormReg && setTypeForm}
        >
          Вход
        </Button>
        <Button
          type={"button"}
          classes={"regist"}
          onClick={!typeFormReg && setTypeForm}
        >
          Регистрация
        </Button>
      </div>
      <CloseBtn openWindowlhandler={openWindowlhandler} />
      <div className="wrap-forms">
        {!restorePass ? (
          <>
            <div className="form-login auth">
              <span className="form-login__title">Вход</span>
              <form id="form-authorisation" action="">
                <Input htmlFor={"form-authorisation"}>
                  Номер телефона или email
                </Input>
                <Input htmlFor={"form-authorisation"}>Пароль</Input>

                <div className="form-login__option">
                  <Input htmlFor={"form-authorisation"} type={"checkbox"}>
                    Запомнить меня
                  </Input>

                  <a href="#" onClick={forgotPassAction}>
                    Забыли пароль?
                  </a>
                </div>

                <Button type={"submit"} classes={"black"}>
                  Войти
                </Button>
              </form>
            </div>
            <div className="form-login regist">
              <span className="form-login__title">Регистрация</span>
              <form id="form-registration" action="">
                <Input nameform={"form-registration"}>Имя*</Input>
                <Input nameform={"form-registration"}>Email*</Input>
                <Input nameform={"form-registration"}>Номер телефона*</Input>

                <div className="form-login__option">
                  <Input nameform={"form-registration"} type={"checkbox"}>
                    Вы соглашаетесь с правилами
                  </Input>
                </div>
                <Button type={"submit"} classes={"black"}>
                  Зарегистрироваться
                </Button>
              </form>
            </div>
          </>
        ) : (
          <div className="form-login restore-pass">
            <span className="form-login__subtitle">
              Вам отправлены email и SMS с паролем
            </span>
            <form id="form-restore" action="">
              <Input nameform={"form-restore"}>Пароль</Input>

              <div className="form-login__option">
                <Input nameform={"form-restore"} type={"checkbox"}>
                  Запомнить меня
                </Input>
              </div>
              <Button type={"submit"} classes={"black"}>
                Войти
              </Button>
              <Button
                type={"submit"}
                classes={"black"}
                onClick={startTimer}
                disable={start}
              >
                Отправить пароль повторно
              </Button>
              <div className="form-login__timer">
                <span>
                  00:{time.sec}:{time.msec}
                </span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
