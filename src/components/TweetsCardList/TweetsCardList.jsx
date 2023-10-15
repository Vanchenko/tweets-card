import { Wrapper, LinkWrapper } from './TweetsCardList.styled';
import { CardTweet } from 'components/CardTweet/CardTweet';

export const TweetsCardList = ({ tweetslist }) => {
  return (
    <Wrapper>
      {tweetslist.map(({ id, tweets, followers, avatar }) => (
        <LinkWrapper key={id}>
            <CardTweet id={id} tweets={tweets} followers={followers} avatar={avatar}/>
        </LinkWrapper>
      ))}
    </Wrapper>
  );
};
