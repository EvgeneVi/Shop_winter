type ButtonsCheckSlType = {
  classes: string;
  first: number;
  sum_sl: number;
  current: number;
  setOffset: (direction: string | null, ex?: number) => () => void;
};
export default function ButtonsCheckSlides({
  classes,
  first,
  sum_sl,
  current,
  setOffset,
}: ButtonsCheckSlType) {
  // console.log(sum_sl);
  // const halderChange = (key: number) => (target) => {
  //   target.checked = key === current;
  // };
  return (
    <div className={`${classes}__checkSlide`}>
      <form>
        {Array(sum_sl)
          .fill("")
          .map((_, i) => {
            let key = i + first;
            return (
              <input
                key={key}
                type="radio"
                name="slide"
                value={key}
                defaultChecked={key === current}
                // onChange={undefined}
                onClick={key != current ? setOffset(null, key) : undefined}
              ></input>
            );
          })}
      </form>
    </div>
  );
}
