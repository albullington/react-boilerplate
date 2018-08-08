import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import HomePage from '../index';
import Button from '../Button';
import Input from '../Input';
import messages from '../messages';

describe('<HomePage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(<HomePage />);
    expect(
      renderedComponent.contains(<FormattedMessage {...messages.header} />),
    ).toEqual(true);
  });
  it('should render an input field', () => {
    const renderedComponent = shallow(<HomePage />);
    expect(
      renderedComponent.contains(
        <Input type="text" placeholder="Enter a string here" />,
      ),
    ).toEqual(true);
  });
  it('should render a submit button', () => {
    const renderedComponent = shallow(<HomePage />);
    expect(renderedComponent.contains(<Button type="submit" />)).toEqual(true);
  });
});
