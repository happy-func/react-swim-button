import React from 'react';
import ReactSwimButton from 'react-swim-button';
import 'react-swim-button/es/style';
import './plainbutton.less';

export default function PlainButton() {
  return (
    <div className="plain-button-wrap">
      <ReactSwimButton
        active
        icon={
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_924_239)">
              <path d="M20.5 0H0.5V20H20.5V0Z" fill="currentColor" fillOpacity="0.01" />
              <path
                d="M10.527 4.1665L10.5117 15.8332"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.66797 10H16.3346"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_924_239">
                <rect width="20" height="20" fill="currentColor" transform="translate(0.5)" />
              </clipPath>
            </defs>
          </svg>
        }
      >
        Plain Button
      </ReactSwimButton>
    </div>
  );
}
