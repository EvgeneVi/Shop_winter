class Timer {
  constructor({ dur, unit, func }) {
    this.func = func;
    this.dur = dur * this._durTimes[unit];
    this.unit = unit;
    this.startTime = null;
    this.current = null;
    this.interval = null;
    this.time = null;
  }
  _durTimes = {
    sec: 1,
    min: 60,
    hour: 3600,
    day: 86400,
  };

  _formatData = (time) => ({
    ...(this.dur >= 86400 && {
      day: `${Math.floor(time / 86400)}`.padStart(2, "0"),
    }),
    ...(this.dur >= 3600 && {
      hour: `${Math.floor((time % 86400) / 3600)}`.padStart(2, "0"),
    }),
    ...(this.dur >= 60 && {
      min: `${Math.floor((time % 3600) / 60)}`.padStart(2, "0"),
    }),
    sec: `${Math.max(Math.floor(time % 60), 0)}`.padStart(2, "0"),
    msec: (`${time % 60}`.split(".")[1] || "0")
      .match(/\d{1,2}/)[0]
      .padStart(2, "0"),
  });

  _countdown = () => {
    this.current = this.dur - (Date.now() - this.startTime) / 1000;
    this.time = this._formatData(this.current);
  };
  _initStartVal = () => {
    this.startTime = Date.now();
    this.current = this.dur;
  };
  stopTimer = () => clearInterval(this.interval);
  startTimer = () => {
    this._initStartVal();
    this.interval = setInterval(() => {
      // console.log(this.time);
      if (this.current <= 0) {
        this.func(false);
        this.stopTimer();
        return;
      }

      this._countdown();
      this.func(this.time);
      // console.log(this._formatData(this.current), this.current);
    }, 10);
  };
}
export default Timer;
