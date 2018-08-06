import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: 2px solid #41addd;
  color: #41addd;
  &:active {
    background: #41addd;
    color: #fff;
  }
`;
