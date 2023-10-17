import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TweetsCardList } from '../components/TweetsCardList/TweetsCardList';
import { Button } from '../components/Button/Button';
import { Wrapper, WrapperHeader } from './Tweets.styled';
import { loadUsers } from 'api/api';
import { BackLink } from "../components/Backlink/Backlink";

const Tweets = () => {
  const [dataTweets, setDataTweets] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('all');
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/home';

  useEffect(() => {
    loadUsers(page, filter)
      .then(resp => {
        if (resp.length === 0) { setPage(1); return }
        setDataTweets(resp);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, [page, filter]);

  const onLoadMore = () => {
    setPage(prevPage => (prevPage + 1));
  };

  const handleChange = (evt) => {
    setFilter(evt.target.value);
  };

  return (
    <Wrapper>
      <WrapperHeader>
        <BackLink to={backLinkHref}>GO BACK</BackLink>
        <label>
            Pick your filter:
            <select value={filter} onChange={handleChange}>
              <option value="all">Show all</option>
              <option value="followings">Show following</option>
              <option value="follow">Show follow</option>
            </select>
          </label>
      </WrapperHeader>
      {dataTweets.length > 0 && <TweetsCardList tweetslist={dataTweets} />}
      <Button onLoadMore={onLoadMore} />
    </Wrapper>
  );
};

export default Tweets;