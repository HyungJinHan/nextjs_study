import NavBar from 'components/NavBar';
import NavLink from 'components/NavLink';
import React, { useState } from 'react';

function Index(props) {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      {/* <NavBar /> */}
      <NavLink />
      <h1>
        Main Page {counter}
      </h1>
      <input
        type='button'
        value='+'
        onClick={
          () => {
            setCounter((prev) => prev + 1)
          }
        }
      />
    </div >
  );
}

export default Index;