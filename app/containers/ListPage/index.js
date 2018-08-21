/*
 * ListPage
 *
 * This is the second thing users see of our App, at the '/list' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectSaga from 'utils/injectSaga';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectList,
} from 'containers/App/selectors';
import List from 'components/List';
import { fetchList } from '../App/actions';
import messages from './messages';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class ListPage extends React.PureComponent {
  componentDidMount() {
    this.props.fetchList();
  }

  render() {
    const { loading, error, list } = this.props;
    const listProps = {
      loading,
      error,
      list,
    };

    return (
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <List {...listProps} />
      </div>
    );
  }
}

ListPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  list: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  fetchList: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  list: makeSelectList(),
});

export function mapDispatchToProps(dispatch) {
  return {
    fetchList: () => dispatch(fetchList()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({
  key: 'home',
  saga,
});

export default compose(
  withSaga,
  withConnect,
)(ListPage);
