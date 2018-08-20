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
import Button from './Button';
import Form from './Form';
import Input from './Input';
import messages from './messages';
import { addString, insertStringIntoList } from './actions';
import { makeSelectString } from './selectors';
import reducer from './reducer';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  componentDidMount() {
    if (this.props.searchTerm && this.props.searchTerm.trim().length > 0) {
      this.props.handleSubmit();
    }
  }

  render() {
    return (
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <Form onSubmit={this.props.handleSubmit}>
          <Input
            type="text"
            id="search_term"
            placeholder="Enter a string here"
            value={this.props.searchTerm}
            onChange={this.props.handleChange}
          />
          <Button type="submit" />
        </Form>
      </div>
    );
  }
}

HomePage.propTypes = {
  searchTerm: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  searchTerm: makeSelectString(),
});

export function mapDispatchToProps(dispatch) {
  return {
    handleChange: e => dispatch(addString(e.target.value)),
    handleSubmit: e => {
      if (e !== undefined && e.preventDefault) e.preventDefault();
      dispatch(insertStringIntoList());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({
  key: 'home',
  reducer,
});

export default compose(
  withReducer,
  withConnect,
)(HomePage);
