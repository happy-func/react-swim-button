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

### Basic Usage

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
