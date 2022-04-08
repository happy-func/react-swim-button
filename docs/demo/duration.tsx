import React, { useState } from 'react';
import ReactSwimButton from 'react-swim-button';

export default () => {
  const [activeAt, setActiveAt] = useState(0);
  return (
    <div>
      {Array.from({ length: 2 }).map((_, index) => (
        <ReactSwimButton
          key={index}
          active={activeAt === index}
          style={{ marginRight: 16 }}
          onClick={() => setActiveAt(index)}
          duration={(index + 1) * 100}
        >
          {['Fast', 'Slow'][index]}
        </ReactSwimButton>
      ))}
    </div>
  );
};
