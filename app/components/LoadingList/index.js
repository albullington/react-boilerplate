import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';

function LoadingList({ loading, error, list }) {
  if (loading) {
    return <div>Still loading</div>;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <div>Something went wrong, please try again!</div>
    );
    return <List component={ErrorComponent} />;
  }

  if (list !== false) {
    return <List items={list} component={List} />;
  }
}

LoadingList.propTypes = {
  loading: PropTypes.func,
  error: PropTypes.func,
  list: PropTypes.array,
};

export default LoadingList;
