import TWEEN from "@tweenjs/tween.js";
import styled , {keyframes} from 'styled-components';
import React, { CSSProperties, ReactElement, useEffect, useRef } from "react";
import clsx from "clsx";

const StyledReactSwimButton = styled.div`
  &.swim-button-box{
    position: relative;
    display: inline-block;
    background-color: #fff;
    font-size: 14px;
    line-height: 48px;
    text-align: center;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 3px 12px rgba(188, 193, 205, .3);
    height: 48px;
    padding: 0 24px;
    cursor: pointer;
    box-sizing: border-box;
    color: #858b9b;
    transition-property: color;
    transition-duration: .25s;
    transition-timing-function: ease;
    user-select: none;
    &:hover{
      color: #fff;
    }
    &-active{
      border: 1px solid #2b65f4;
      background-color: #2b65f4;
      color: #fff;
      &:hover{
        color: #2b65f4;
      }
      &.swim-button-box > .swim-button-wave{
        background-color: #fff;
      }
    }
    .swim-button{
      position: relative;
      display: block;
      color: inherit;
      width: 100%;
      height: 100%;
      border-width: 0;
      background-color: transparent;
      cursor: pointer;
    }
    .swim-button-icon{
      margin-right: 8px;
    }
    .swim-button-wave{
      position: absolute;
      top: 0;
      height: 100%;
      background-color: #2b65f4;
    }
  }
`;

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const StyledSpan = styled.span`
  &.swim-button-loading{
    display: inline-block;
    animation: ${rotate} 1s infinite linear;
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -0.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
`;

export default function ReactSwimButton(props: IProps) {
  const { active, onClick, children, className, style, icon, loading } = props;
  const water = useRef(null);
  function animate(time: number | undefined) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
  }
  function updateProperty(coords: { width: number }) {
    if (water.current) {
      // @ts-ignore
      water.current.style.setProperty("width", `${coords.width}%`);
    }
  }
  function _onMouseEnter() {
    const coords = { width: 0 };
    const tween = new TWEEN.Tween(coords)
      .to({ width: 100 }, 250)
      .easing(TWEEN.Easing.Cubic.InOut) // Use an easing function to make the animation smooth.
      .onUpdate(updateProperty);
    // @ts-ignore
    water.current.style.removeProperty("right");
    // @ts-ignore
    water.current.style.setProperty("left", `0px`);
    tween.start();
  }
  function _onMouseLeave() {
    const coords = { width: 100 };
    const tween = new TWEEN.Tween(coords)
      .to({ width: 0 }, 250)
      .easing(TWEEN.Easing.Cubic.InOut) // Use an easing function to make the animation smooth.
      .onUpdate(updateProperty);
    // @ts-ignore
    water.current.style.removeProperty("left");
    // @ts-ignore
    water.current.style.setProperty("right", `0px`);
    tween.start();
  }
  function _onClick() {
    if (loading) return;
    onClick && onClick();
  }
  useEffect(() => {
    requestAnimationFrame(animate);
  }, []);
  return (
    <StyledReactSwimButton
      className={clsx("swim-button-box", className, {
        ["swim-button-box-active"]: active,
      })}
      onMouseEnter={_onMouseEnter}
      onMouseLeave={_onMouseLeave}
      onClick={_onClick}
      style={style}
    >
      <div
        ref={water}
        className={clsx("swim-button-wave")}
        style={{ left: 0 }}
      />
      <span className={clsx("swim-button")}>
        {icon && !loading && (
          <span className={clsx("swim-button-icon")}>{icon}</span>
        )}
        {loading && (
          <span className={clsx("swim-button-icon")}>
            <Loading />
          </span>
        )}
        {children}
      </span>
    </StyledReactSwimButton>
  );
}

function Loading() {
  return (
    <StyledSpan role="img" className={clsx("swim-button-loading")}>
      <svg
        viewBox="0 0 1024 1024"
        focusable="false"
        data-icon="loading"
        width="1em"
        height="1em"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"/>
      </svg>
    </StyledSpan>
  );
}

interface IProps {
  active?: boolean;
  onClick?: () => void;
  children?: React.ReactChildren | string;
  className?: string;
  style?: CSSProperties;
  icon?: ReactElement;
  loading?: boolean;
}
