import TWEEN from '@tweenjs/tween.js';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import React, { CSSProperties, ReactElement, useEffect, useRef } from 'react';
import clsx from 'clsx';
import StyledButton from './StyledButton';
import StyledButtonBox from './StyledButtonBox';
import StyledButtonIcon from './StyledButtonIcon';
import StyledButtonWave from './StyledButtonWave';
import StyledLoading from './StyledLoading';

const GlobalStyle = createGlobalStyle<{ theme: { primary: string; active: boolean } }>`
  :root{
    --swim-button-primary: ${(props) => props.theme.primary}
  }
`;

function ReactSwimButton(props: ReactSwimButtonProps) {
  const {
    primary = `#2b65f4`,
    active,
    onClick,
    children,
    className,
    style,
    icon,
    loading,
    duration = 250,
  } = props;
  const waveRef = useRef(null);
  function animate(time: number | undefined) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
  }
  function updateProperty(coords: { width: number }) {
    if (waveRef.current) {
      // @ts-ignore
      waveRef.current.style.setProperty('width', `${coords.width}%`);
    }
  }
  function _onMouseEnter() {
    const coords = { width: 0 };
    const tween = new TWEEN.Tween(coords)
      .to({ width: 100 }, duration)
      .easing(TWEEN.Easing.Cubic.InOut) // Use an easing function to make the animation smooth.
      .onUpdate(updateProperty);
    // @ts-ignore
    waveRef.current.style.removeProperty('right');
    // @ts-ignore
    waveRef.current.style.setProperty('left', `0px`);
    tween.start();
  }
  function _onMouseLeave() {
    const coords = { width: 100 };
    const tween = new TWEEN.Tween(coords)
      .to({ width: 0 }, duration)
      .easing(TWEEN.Easing.Cubic.InOut) // Use an easing function to make the animation smooth.
      .onUpdate(updateProperty);
    // @ts-ignore
    waveRef.current.style.removeProperty('left');
    // @ts-ignore
    waveRef.current.style.setProperty('right', `0px`);
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
    <ThemeProvider theme={{ primary, active }}>
      <GlobalStyle />
      <StyledButtonBox
        className={clsx('swim-button-box', className, {
          ['swim-button-box-active']: active,
        })}
        onMouseEnter={_onMouseEnter}
        onMouseLeave={_onMouseLeave}
        onClick={_onClick}
        style={style}
      >
        <StyledButtonWave ref={waveRef} className={clsx('swim-button-wave')} style={{ left: 0 }} />
        <StyledButton className={clsx('swim-button')}>
          {icon && !loading && (
            <StyledButtonIcon className={clsx('swim-button-icon')}>{icon}</StyledButtonIcon>
          )}
          {loading && (
            <StyledButtonIcon className={clsx('swim-button-icon')}>
              <Loading />
            </StyledButtonIcon>
          )}
          <span className="swim-button-text">{children}</span>
        </StyledButton>
      </StyledButtonBox>
    </ThemeProvider>
  );
}

function Loading() {
  return (
    <StyledLoading role="img" className={clsx('swim-button-loading')}>
      <svg
        viewBox="0 0 1024 1024"
        focusable="false"
        data-icon="loading"
        width="1em"
        height="1em"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" />
      </svg>
    </StyledLoading>
  );
}

export interface ReactSwimButtonProps {
  /**
   * @description       set primary color
   * @default           #2b65f4
   */
  primary?: string;
  /**
   * @description       set tab active
   * @default           undefined
   */
  active?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  /**
   * @description       set custom className to button box
   * @default           undefined
   */
  className?: string;
  /**
   * @description       set custom style to button box
   * @default           undefined
   */
  style?: CSSProperties;
  /**
   * @description       custom icon render
   * @default           undefined
   */
  icon?: ReactElement;
  /**
   * @description       show default loading icon
   * @default           undefined
   */
  loading?: boolean;
  /**
   * @description       wave animation duration(ms)
   * @default           250
   */
  duration?: number;
}

export default ReactSwimButton;
