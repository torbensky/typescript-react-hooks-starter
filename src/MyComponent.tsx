import React, { FC, useState } from "react";

const MyComponent: FC<{ someValue: string }> = props => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>{props.someValue}</div>
      <div>I've been clicked {count} times</div>
      <div>
        <button onClick={evt => setCount(count + 1)}>Click Me</button>
      </div>
    </div>
  );
};

export default MyComponent;
