import React, { CSSProperties, ReactElement } from 'react';

function clsx(...classnames: (string | undefined | boolean)[]) {
  return classnames.filter((item) => !!item).join(' ');
}

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
  function _onClick() {
    if (loading) return;
    onClick && onClick();
  }
  return (
    <div
      className={clsx('swim-button-box', className, active && `swim-button-box-active`)}
      onClick={_onClick}
      // @ts-ignore
      style={{ ...style, [`--primary-color`]: primary, [`--swim-duration`]: `${duration}ms` }}
    >
      <span className={clsx('swim-button')}>
        {icon && !loading && <span className={clsx('swim-button-icon')}>{icon}</span>}
        {loading && (
          <span className={clsx('swim-button-icon')}>
            <Loading />
          </span>
        )}
        <span className="swim-button-text">{children}</span>
      </span>
    </div>
  );
}

function Loading() {
  return (
    <span role="img" className={clsx('swim-button-loading')}>
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
    </span>
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
