import backimage from '../images/YHlm.gif';
import { Wrapper, Miniature } from './Home.styled';

const Home = () => {
  return (
    <Wrapper>
      <Miniature src={backimage} alt=""/>
    </Wrapper>
  );
};

export default Home;

