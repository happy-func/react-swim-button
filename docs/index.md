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

### Usage

```tsx
import React , { useState } from 'react';
import ReactSwimButton from 'react-swim-button';

const texts = ["React" , "Swim" , "Button"];

export default () => {
  const [activeAt , setActiveAt] = useState("React");
  return (
    <div>
      {texts.map((text , index) => (
        <ReactSwimButton
          active={activeAt === text}
          loading={index === 0}
          style={{marginRight: 16}}
          onClick={() => setActiveAt(text)}
        >
          {text}
        </ReactSwimButton>
      ))}
    </div>
  )
};
```