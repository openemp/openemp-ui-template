import React from 'react';
import { Router } from '@reach/router';
import { DisplayGreeting } from 'features';
import { withAuth } from '@openemp-mf/login';

const Root = () => {
  return (
    <div className="mt-16">
      <Router>
        <DisplayGreeting path="/template" />
      </Router>
    </div>
  );
};

export default withAuth(Root);
