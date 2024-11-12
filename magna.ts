import React from 'react';
import { Button } from '@material-ui/core';
import { generateClassName } from './mui-utils';

function MyComponent() {
  const classes = generateClassName('my-button');

  return (
    <div>
      <Button className={classes} onClick={() => console.log('Button clicked')}>
        Click me!
      </Button>
    </div>
  );
}

export default MyComponent;
