import React from 'react';
import { Router, ha } from '@reach/router';
import { DisplayGreeting } from 'features';

const Root = () => {
  return (
    <div className="mt-16">
      <Router>
        <DisplayGreeting path="/template" />
      </Router>
    </div>
  );
};

export default Root;
