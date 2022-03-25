# Guide

## react-swim-button

### Getting Started

Install dependencies,

```bash
# npm
$ npm i react-swim-button
# yarn
$ yarn add react-swim-button
```

<API src="../src/Button/index.tsx"></API>

## Usage

### Basic

```tsx
import React, { useState } from 'react';
import ReactSwimButton from 'react-swim-button';

const texts = ['React', 'Swim', 'Button'];

export default () => {
  const [activeAt, setActiveAt] = useState('React');
  return (
    <div>
      {texts.map((text, index) => (
        <ReactSwimButton
          key={text}
          active={activeAt === text}
          loading={index === 0}
          style={{ marginRight: 16 }}
          onClick={() => setActiveAt(text)}
        >
          {text}
        </ReactSwimButton>
      ))}
    </div>
  );
};
```

### Custom Primary Color

```tsx
import React, { useState } from 'react';
import ReactSwimButton from 'react-swim-button';

export default () => {
  const [activeAt, setActiveAt] = useState(0);
  return (
    <div>
      {Array.from({ length: 2 }).map((_, index) => (
        <ReactSwimButton
          primary="#ff7426"
          active={activeAt === index}
          style={{ marginRight: 16 }}
          onClick={() => setActiveAt(index)}
        >
          Custom Primary Color
        </ReactSwimButton>
      ))}
    </div>
  );
};
```

### Custom Icon

```tsx
import React, { useState } from 'react';
import ReactSwimButton from 'react-swim-button';

const texts = [
  {
    text: 'React',
    icon: (
      <svg
        className="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
      >
        <path
          d="M352.511759 832c-35.360409 0-64 28.639591-64 64 0 35.360409 28.639591 64 64 64s64-28.639591 64-64C416.511759 860.639591 387.872168 832 352.511759 832L352.511759 832z"
          fill="currentColor"
        />
        <path
          d="M800.511759 832c-35.360409 0-64 28.639591-64 64 0 35.360409 28.639591 64 64 64s64-28.639591 64-64C864.511759 860.639591 835.872168 832 800.511759 832L800.511759 832z"
          fill="currentColor"
        />
        <path
          d="M864.00086 800.00086l-519.775299 0c-46.111652 0-86.65674-36.480258-92.288671-83.039161l-54.272275-382.080258L166.783604 156.319634C164.863862 140.736353 150.65674 128 136.767854 128l-40.768714 0c-17.664722 0-32.00086-14.336138-32.00086-31.99914s14.336138-32.00086 32.00086-32.00086l40.768714 0c46.687918 0 87.680258 36.480258 93.343153 83.039161l30.815643 177.887488 54.495901 383.712727c1.792447 14.848757 15.232361 27.359763 28.79957 27.359763l519.775299 0c17.695686 0 31.99914 14.303454 31.99914 32.00086S881.696546 800.00086 864.00086 800.00086z"
          fill="currentColor"
        />
        <path
          d="M384.223626 672.00086c-16.60852 0-30.655665-12.8-31.871845-29.66483-1.312512-17.632039 11.93646-32.960731 29.535815-34.240559L816.00043 576.094611c15.935923-0.096331 29.375837-12.607338 31.1356-26.848864l50.400108-288.384464c1.279828-10.751243-1.696116-22.527725-8.12794-29.824808-4.128477-4.67206-9.311437-7.040774-15.359656-7.040774L320 223.9957c-17.664722 0-31.99914-14.336138-31.99914-32.00086s14.336138-32.00086 31.99914-32.00086l554.048542 0c24.447467 0 46.911544 10.144013 63.263755 28.608628 18.688241 21.087918 27.263432 50.816396 23.52028 81.632039l-50.432791 288.415428c-5.439269 44.864507-45.951673 81.344765-92.063325 81.344765l-431.74412 31.904529C385.792447 671.968176 384.992555 672.00086 384.223626 672.00086z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    text: 'Swim',
  },
  {
    text: 'Button',
  },
];

export default () => {
  const [activeAt, setActiveAt] = useState('React');
  return (
    <div>
      {texts.map((item, index) => (
        <ReactSwimButton
          key={item.text}
          icon={item.icon}
          active={activeAt === item.text}
          style={{ marginRight: 16 }}
          onClick={() => setActiveAt(item.text)}
        >
          {item.text}
        </ReactSwimButton>
      ))}
    </div>
  );
};
```
