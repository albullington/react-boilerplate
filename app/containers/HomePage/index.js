/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
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

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectList,
} from 'containers/App/selectors';
import LoadingList from 'components/LoadingList';
import Button from './Button';
import Form from './Form';
import Input from './Input';
import messages from './messages';
import { loadList } from '../App/actions';
import { addString } from './actions';
import { makeSelectString } from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  componentDidMount() {
    if (this.props.searchTerm && this.props.searchTerm.trim().length > 0) {
      this.props.handleSubmit();
    }
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
        <Form>
          <Input
            type="text"
            id="search_term"
            placeholder="Enter a string here"
            value={this.props.searchTerm}
            onChange={this.props.handleChange}
          />
          <Button onSubmit={this.props.handleSubmit} type="submit" />
        </Form>
        <LoadingList {...listProps} />
      </div>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  list: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  searchTerm: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    handleChange: e => dispatch(addString(e.target.value)),
    handleSubmit: e => {
      if (e !== undefined && e.preventDefault) e.preventDefault();
      dispatch(loadList());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  list: makeSelectList(),
  searchTerm: makeSelectString(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({
  key: 'home',
  reducer,
});

const withSaga = injectSaga({
  key: 'home',
  saga,
});

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
