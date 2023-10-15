import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TweetsCardList } from '../components/TweetsCardList/TweetsCardList';
import { Button } from '../components/Button/Button';
import { Wrapper, Text, Loader } from './Tweets.styled';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { ColorRing } from 'react-loader-spinner';
import { loadUsers } from 'api/api';
import { BackLink } from "../components/Backlink/Backlink";

const Tweets = () => {
  const [dataTweets, setDataTweets] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
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
      {isLoading && (
        <Loader>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </Loader>
      )}
      {dataTweets.length > 0 && <TweetsCardList tweetslist={dataTweets} />}
      {error && <Text>{error}</Text>}
      <Button onLoadMore={onLoadMore} />
    </Wrapper>
  );
};

export default Tweets;