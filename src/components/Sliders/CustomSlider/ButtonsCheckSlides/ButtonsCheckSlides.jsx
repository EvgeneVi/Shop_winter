export default function ButtonsCheckSlides({
  classes,
  first,
  sum_sl,
  current,
  setOffset,
}) {
  // console.log(sum_sl);
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
                checked={key === current && true}
                onChange={(target) => {
                  target.checked = key === current && true;
                }}
                onClick={key != current ? setOffset(null, key) : null}
              ></input>
            );
          })}
      </form>
    </div>
  );
}
