import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Links = styled(Link)`
  display: block;
  margin-bottom: 10px;
  text-decoration: none;
  color: blue;
  font-weight: 500;
  :hover {
    text-transform: uppercase;
    text-decoration: dashed;
  }
`;

const NotFound = () => {
    const location = useLocation();
  return (
    <>
      <Links to="/" state={{ from: location.state?.from ?? '*' }}>
        No such page exists! Go Home!
      </Links>
    </>
  );
};

export default NotFound;
