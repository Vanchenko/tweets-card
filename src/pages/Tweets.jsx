import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TweetsCardList } from '../components/TweetsCardList/TweetsCardList';
import { Button } from '../components/Button/Button';
import { Wrapper } from './Tweets.styled';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { loadUsers } from 'api/api';
import { BackLink } from "../components/Backlink/Backlink";

const Tweets = () => {
  const [dataTweets, setDataTweets] = useState([]);
  const [page, setPage] = useState(1);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/home';

  useEffect(() => {
    loadUsers(page)
      .then(resp => {
        if (resp.length === 0) { setPage(1); return }
        setDataTweets(resp);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, [page]);

  const onLoadMore = () => {
    setPage(prevPage => (prevPage + 1));
  };

  return (
    <Wrapper>
      <BackLink to={backLinkHref}>GO BACK</BackLink>
      <ToastContainer
        autoClose={1500}
        transition={Zoom}
        theme="colored"
        style={{ top: '1px' }}
      />
      {dataTweets.length > 0 && <TweetsCardList tweetslist={dataTweets} />}
      <Button onLoadMore={onLoadMore} />
    </Wrapper>
  );
};

export default Tweets;