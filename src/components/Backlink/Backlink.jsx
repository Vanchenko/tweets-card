import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 10px;

  :hover {
    color: orangered;
  }
`;

export const BackLink = ({ to, children }) => {
    return (
        <StyledLink to={to}>
            <p>back</p>
            {children}
        </StyledLink>
    )
};