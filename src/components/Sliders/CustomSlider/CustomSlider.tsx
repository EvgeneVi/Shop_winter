import { useEffect, useRef, useState } from "react";
import { BoxTypes } from "types/types";
import "./CustomSlider.scss";
import ButtonsShift from "./ButtonsShift/ButtonsShift";
import ButtonsCheckSlides from "./ButtonsCheckSlides/ButtonsCheckSlides";

type CustomSltypes = {
  children: React.ReactNode;
  classes: string;
  classesBtn?: string;
  infinity?: boolean;
  durucation?: number;
  buttonsCheckSlides?: boolean;
};

type StateParmsTypes = {
  dur: number;
  max: number;
  counter: number;
  slider_w: number;
  item_w: number; ////!
  items: React.ReactNode;
  end: number;
};

function CustomSlider({
  children,
  classes,
  classesBtn,
  infinity = false,
  durucation = 0.5,
  buttonsCheckSlides = false,
}: CustomSltypes) {
  const ref = useRef(null);
  const [state, setState] = useState<StateParmsTypes>({
    dur: 0,
    max: 0,
    counter: 0,
    slider_w: 0,
    item_w: 0, ////!
    items: children,
    end: 1,
  });

  // const a = state.slider_w;
  const { slider_w, item_w, counter, items, max, end, dur } = state;

  const float = (val: number) => parseFloat(val?.toFixed(4));

  const onresizeWidth = ({
    borderBoxSize,
    target: { firstChild: wrap },
  }: {
    borderBoxSize: any[];
    target: { firstChild: HTMLElement };
  }) => {
    const slider_w = ~~borderBoxSize[0].inlineSize,
      item_w = ~~(wrap.getBoundingClientRect().width / wrap.childElementCount);

    let { counter, max, items, end } = state;

    const sum_vw = ~~(slider_w / item_w);
    const childsList = children as React.ReactNode[];

    if (sum_vw > 0 && sum_vw < childsList.length) {
      const sum_slides = childsList.length / (sum_vw || childsList.length);

      if (infinity) {
        const i = sum_vw < childsList.length ? sum_vw + 1 : 0;
        items = [
          ...childsList.slice(-i),
          ...childsList,
          ...childsList.slice(0, i),
        ];
        end = float(sum_slides - Math.floor(sum_slides)) || end;
        max = float(Math.ceil(sum_slides) + end);

        counter = 1;
      } else {
        // console.log(float(1 - ((slider_w % item_w) / item_w || 1)), sum_vw);
        end = float(1 - ((slider_w % item_w) / item_w || 1)) / (sum_vw || 1);
        max = float(Math.ceil(sum_slides) + end - 2);
      }
    }
    // console.log(max);
    setState((prev) => ({
      ...prev,
      slider_w,
      item_w,
      counter,
      max,
      items,
      end,
    }));
  };
  const getSlide = () => {
    if (infinity) {
      return { [counter]: counter, ...{ 0: float(max - 1), [max]: 1 } };
    } else {
      return { [counter]: counter };
    }
  };
  const edge = { 1: infinity ? 1 : 0, [max]: infinity ? float(max - 1) : max };

  const setOffset =
    (direction: string | null, ex: number = -1) =>
    () => {
      let { counter, max, end } = state;
      let dur = durucation;
      let step = 1;

      const setValStep = (count: number) => {
        return /*infinity &&*/ float(count) === edge[max] ? end : 1;
      };
      if (ex > -1) {
        setState((prev) => {
          return {
            ...prev,
            counter: Math.min(ex, edge[max]),
            dur,
          };
        });
        return;
      }

      switch (direction) {
        case "next":
          step = setValStep(counter + end);
          counter =
            counter < edge[max] ? Math.min(float(counter + step), max) : 0;
          break;
        case "prev":
          step = setValStep(counter);
          counter =
            counter > edge[1] ? Math.max(float(counter - step), 0) : max;
          break;
      }
      dur = infinity && (counter === max || counter === 0) ? 0 : durucation;
      setState((prev) => ({ ...prev, counter, dur }));
    };

  useEffect(() => {
    if (!ref?.current) return;
    const obs = new ResizeObserver((entries: any[]) =>
      onresizeWidth(entries[0])
    );
    obs.observe(ref.current);

    return () => {
      obs.disconnect();
    };
  }, []); ///!!!

  let start_offset = 0;

  const pureSlide = Math.floor(slider_w / item_w) * item_w;
  if (infinity && max > 0) {
    start_offset = (slider_w - pureSlide) / 2 - item_w;

    if (counter === max) {
      setTimeout(() => setOffset("prev")(), 0);
    }
    if (counter === 0) {
      setTimeout(() => setOffset("next")(), 0);
    }
  }
  // console.log(Math.floor(slider_w / item_w) * item_w, slider_w);
  return (
    <section className={`custom-slider ${classes}`} ref={ref}>
      <div
        // onMouseMove={(e) => console.log(e)}
        // style={{ "--my-css-var": 10 } as React.CSSProperties}
        className={`${classes}__wrap`}
        style={{
          transition: `${dur}s`,
          transform: `translateX(
            calc(${start_offset}px
            -
            ${pureSlide * counter}px)`,

          /// если отступ отрицательный то он равен 0 PX!
        }}
      >
        {(items as JSX.Element[])?.map(
          (item, i): JSX.Element => ({
            ...item,
            key: `${i}`,
          })
        )}
      </div>
      {/* {console.log(max)} */}
      {/* (infinity ? 2 : 0) */}
      {max > 0 && (
        <>
          <ButtonsShift
            classes={classesBtn || "custom-slider"}
            setOffset={setOffset}
          />
          {/* {console.log(max)} */}
          {buttonsCheckSlides && max > (infinity ? 2 : 0) && (
            <ButtonsCheckSlides
              classes={classes}
              first={edge[1]}
              sum_sl={infinity ? max - end : Math.ceil(max) + 1}
              current={Math.ceil(getSlide()[counter])}
              setOffset={setOffset}
            />
          )}
        </>
      )}
    </section>
  );
}

export default CustomSlider;
