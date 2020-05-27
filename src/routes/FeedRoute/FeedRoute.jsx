/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useState, useEffect }  from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import './FeedRoute.scss';

const FeedRoute = () => {
  const [users, setUsers] = useState([]);
  const [stories, setStories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadUsers = () => {
    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }

  const loadPosts = () => {
    if (users.length) {
      for (const user of users) {
        fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${user.id}/posts`)
          .then(response => response.json())
          .then(data => {
            if (data.length) setPosts(previous => ([...previous, ...data]));
            
            setLoading(false);
          });
      }  
    }
  }

  const loadStories = () => {
    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories')
      .then(response => response.json())
      .then(data => setStories(data));
  }

  useEffect(() => {
    loadUsers();
  }, []);

  useEffect(() => {
    loadPosts();
  }, [users]);

  useEffect(() => {
    loadStories();
  }, [users]);

  const getUserHandler = userId => users.find(user => userId === user.id);

  return (
    <div data-testid="feed-route">      
      {loading
        ? <Loading />
        : 
          <>
          <Stories 
            stories={stories}
            getUserHandler={getUserHandler} 
          />
          <Posts
            posts={posts}
            getUserHandler={getUserHandler}
          />
          </>
      }
    </div>
  );
};

export default FeedRoute;
