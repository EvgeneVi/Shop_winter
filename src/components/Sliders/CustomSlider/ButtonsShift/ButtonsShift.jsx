export default function ButtonsShift({ classes, setOffset }) {
  // console.log(setOffset);
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
