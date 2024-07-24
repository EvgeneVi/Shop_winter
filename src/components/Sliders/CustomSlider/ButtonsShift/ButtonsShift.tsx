type BtnType = {
  setOffset: (direction: string, ex?: number) => () => void;
  classes: string;
};
export default function ButtonsShift({ classes, setOffset }: BtnType) {
  return (
    <>
      <button
        className={`${classes}__btn prev`}
        onClick={setOffset("prev")}
      ></button>
      <button
        className={`${classes}__btn next`}
        onClick={setOffset("next")}
      ></button>
    </>
  );
}
