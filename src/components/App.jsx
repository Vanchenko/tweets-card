import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { CommonLayout } from './CommonLayout/CommonLayout';

const Home = lazy(() => import('pages/Home'));
const Tweets = lazy(() => import('../pages/Tweets'));
//const NotFound = lazy(() => import('../pages/Notfound'));

export const App = () => {

  return (
    <Routes>
      <Route path="/" element={<CommonLayout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
      </Route>
      {/* <Route path="*" element={<NotFound />} /> */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

//main file
