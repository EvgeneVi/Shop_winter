import { useEffect, useRef, useState } from "react";

import "./CustomSlider.scss";
import PropTypes from "prop-types";
import ButtonsShift from "./ButtonsShift/ButtonsShift";
import ButtonsCheckSlides from "./ButtonsCheckSlides/ButtonsCheckSlides";

function CustomSlider({
  children,
  classes,
  classesBtn,
  infinity,
  durucation,
  buttonsCheckSlides,
}) {
  const ref = useRef(null);
  const [state, setState] = useState({
    dur: 0,
    max: 0,
    counter: 0,
    slider_w: 0,
    item_w: 0, ////!
    items: children,
    end: 1,
  });
  const { slider_w, item_w, counter, items, max, end, dur } = state;

  const float = (val) => parseFloat(val?.toFixed(4));

  const onresizeWidth = ({ borderBoxSize, target: { firstChild } }) => {
    const slider_w = borderBoxSize[0].inlineSize,
      item_w =
        firstChild.getBoundingClientRect().width / firstChild.childElementCount;

    let { counter, max, items, end } = state;

    const sum_vw = Math.floor(slider_w / item_w);

    if (sum_vw > 0 && sum_vw < children.length) {
      const sum_slides = children.length / (sum_vw || children.length);

      if (infinity) {
        const i = sum_vw < children.length ? sum_vw + 1 : 0;
        items = [...children.slice(-i), ...children, ...children.slice(0, i)];
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

  const setOffset = (direction, ex) => () => {
    let { counter, max, end } = state;
    let dur = durucation;
    let step = 1;

    const setValStep = (count) => {
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
        counter = counter > edge[1] ? Math.max(float(counter - step), 0) : max;
        break;
    }
    dur = infinity && (counter === max || counter === 0) ? 0 : durucation;
    setState((prev) => ({ ...prev, counter, dur }));
  };

  useEffect(() => {
    if (!ref?.current) return;
    const obs = new ResizeObserver((entries) => onresizeWidth(entries[0]));
    obs.observe(ref.current);

    return () => {
      obs.disconnect();
    };
  }, []); ///!!!

  let start_offset = 0;

  if (infinity && max > 0) {
    start_offset =
      (slider_w - Math.floor(slider_w / item_w) * item_w) / 2 - item_w;

    if (counter === max) {
      setTimeout(() => setOffset("prev")(), 0);
    }
    if (counter === 0) {
      setTimeout(() => setOffset("next")(), 0);
    }
  }
  return (
    <section className={`custom-slider ${classes}`} ref={ref}>
      <div
        // onMouseMove={(e) => console.log(e)}
        className={`${classes}__wrap`}
        style={{
          transition: `${dur}s`,
          transform: `translateX(
            calc(${start_offset}px
            -
            ${Math.floor(slider_w / item_w) * item_w * counter}px)`,

          /// если отступ отрицательный то он равен 0 PX!
        }}
      >
        {items.map((item, i) => ({ ...item, key: i }))}
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

CustomSlider.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.string,
  infinity: PropTypes.bool,
  durucation: PropTypes.number,
  buttonsCheckSlides: PropTypes.bool,
  classesBtn: PropTypes.string,
};

CustomSlider.defaultProps = {
  buttonsCheckSlides: false,
  infinity: false,
  durucation: 0.5,
  // slides: items,
};

export default CustomSlider;
