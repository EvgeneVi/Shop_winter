import { useState, useEffect } from "react";
import Timer from "../../../../utils/timer";
import FormAuth from "../FormAuth/FormAuth";
import "./FormContainerReg.scss";

export default function FormContainerReg({ openWindowlhandler, ...props }) {
  const [state, setState] = useState({
    restorePass: false,
    timer: { timerObj: null, start: false, time: { sec: "00", msec: "00" } },
  });

  const setStateData = (name, data) => {
    setState((prev) => {
      const val = typeof data === "object" ? { ...prev[name], ...data } : data;
      return {
        ...prev,
        [name]: val,
      };
    });
  };
  const stopTimer = () => {
    setStateData("timer", { start: false });
  };
  const startTimer = () => {
    const timerObj = new Timer({
      dur: 2,
      unit: "sec",
      func: (time) => {
        if (time === false) {
          setStateData("timer", { start: false, timerObj: null });
          return;
        }
        setStateData("timer", { time });
      },
    });
    setStateData("timer", { start: true, timerObj });
  };

  const openWindowlCustomAction = (e) => {
    stopTimer();
    setStateData("restorePass", false);
    openWindowlhandler()(e);
  };
  const forgotPassAction = () => {
    setStateData("restorePass", true);
    startTimer();
  };

  const startTimerAction = (e) => {
    e.preventDefault();
    return startTimer();
  };

  useEffect(() => {
    // console.log(state);
    const { start, timerObj } = state.timer;
    if (timerObj && start === true) {
      timerObj.startTimer();
    } else if (timerObj && start === false) {
      timerObj.stopTimer();
    }
  }, [state.timer.start]);

  return (
    <FormAuth
      forgotPassAction={forgotPassAction}
      restorePass={state.restorePass}
      openWindowlhandler={openWindowlCustomAction}
      timer={state.timer}
      startTimer={startTimerAction}
      setTypeForm={props.setTypeForm}
      typeFormReg={props.typeFormReg}
    />
  );
}
