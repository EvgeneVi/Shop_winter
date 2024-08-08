import { useState, useEffect } from "react";
import { FormUserContainerType } from "types/types";
import Timer from "utils/timer";
import FormAuth from "../FormAuth/FormAuth";
import "./FormContainerReg.scss";
import ModalWindow from "components/shared/ModalWindow/ModalWindow";

type FormUserType = {
  restorePass: boolean;
  timer: {
    timerObj: null | Timer;
    time: {
      sec: string;
      msec: string;
    };
  };
};
interface FormContType extends FormUserContainerType {
  openWindowlhandler: (e?: boolean) => (e: React.MouseEvent) => void;
}

const FormContainerReg = ({
  openWindowlhandler,
  setTypeForm,
  typeFormReg,
}: FormContType) => {
  const [state, setState] = useState<FormUserType>({
    restorePass: false,
    timer: { timerObj: null, time: { sec: "00", msec: "00" } },
  });

  const setStateData = (name: keyof FormUserType, data: any) => {
    setState((prev) => {
      const val =
        typeof data === "object"
          ? { ...(prev[name] as object), ...data }
          : data;
      return {
        ...prev,
        [name]: val,
      };
    });
  };

  const startTimer = () => {
    const timerObj = new Timer({
      dur: 5,
      unit: "sec",
      func: (time) => {
        if (time === null) {
          setStateData("timer", { timerObj: null });
          return;
        }
        setStateData("timer", { time });
      },
    });
    setStateData("timer", { timerObj });
  };

  const openWindowlCustomAction = (e: React.MouseEvent) => {
    state.timer.timerObj?.stopTimer();
    openWindowlhandler()(e);
  };

  const forgotPassAction = () => {
    setStateData("restorePass", true);
    startTimer();
  };

  const startTimerAction = (e: React.MouseEvent) => {
    e.preventDefault();
    startTimer();
  };

  useEffect(() => {
    const { timerObj } = state.timer;
    if (timerObj instanceof Timer) {
      timerObj.startTimer();
    }
  }, [state.timer.timerObj]);
  return (
    <ModalWindow
      classes="modal-window modal-form-auth"
      closeWindow={openWindowlCustomAction}
    >
      <FormAuth
        forgotPassAction={forgotPassAction}
        restorePass={state.restorePass}
        time={{ ...state.timer.time }}
        startTimer={startTimerAction}
        setTypeForm={setTypeForm}
        typeFormReg={typeFormReg}
      />
    </ModalWindow>
  );
};
export default FormContainerReg;
