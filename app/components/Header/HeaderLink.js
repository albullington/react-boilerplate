import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: #41addd;
  margin-right: 20px;
  &:active {
    background: #41addd;
    color: #fff;
  }
`;
