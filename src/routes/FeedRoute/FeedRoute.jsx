import React from 'react';
// , { useState, useEffect } 

import Stories from '../../containers/Stories';
// import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import './FeedRoute.scss';

const FeedRoute = () => {
  return (
    <div className="feed" data-testid="feed-route">
      <Stories />
      <Posts />
    </div>
  );
};

export default FeedRoute;
