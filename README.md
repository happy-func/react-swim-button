# react-swim-button

## Getting Started

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

## Support By
### Jetbrains
[<img src="https://raw.githubusercontent.com/happy-func/next-official/6f30e1bb4140f195d5176a6ddc61082be8b25505/public/images/jetbrains.png" alt="Jetbrains" title="Jetbrains" width="100" />](https://www.jetbrains.com/)
### dumi
[<img src="https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png" alt="dumi" title="dumi" width="100" />](https://d.umijs.org/)
### surpath
[<img src="https://surpath-official.oss-cn-beijing.aliyuncs.com/Customer/Header/logo_dark.png" alt="dumi" title="dumi" height="80" />](https://surpath.net/)
