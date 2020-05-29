import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Button } from '@openemp-mf/styleguide';

const MyComponent = (props) => {
  const { onClick } = props;
  return (
    <Grid>
      <Button onClick={onClick}>
        <Typography>Hello OpenEMP</Typography>
      </Button>
    </Grid>
  );
};

MyComponent.defaultProps = {
  onClick: () => {},
};

MyComponent.propTypes = {
  onClick: PropTypes.func,
};

export default MyComponent;
