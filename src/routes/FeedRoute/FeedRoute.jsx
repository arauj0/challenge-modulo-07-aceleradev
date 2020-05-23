/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useState, useEffect }  from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import './FeedRoute.scss';

const FeedRoute = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [usersFetched, setUsersFetched] = useState(0);

  const loadUsers = () => {
    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }

  useEffect(() => {
    loadUsers();
  }, []);

  useEffect(() => {
    if (usersFetched === users.length) {
      return;
    }

    fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${users[usersFetched].id}/posts`)
      .then((res) => res.json())
      .then(data => {
        if (data.length > 0) setPosts([...posts, ...data]);

        setUsersFetched(usersFetched + 1);
      });
  }, [users, usersFetched]);

  const getUserById = postUserId => users.find(user => postUserId === user.id);

  return (
    <div data-testid="feed-route">
      <Stories />
      
      {users.length !== usersFetched
        ? (<Loading />)
        : (
          <Posts
            posts={posts}
            getUserHandler={getUserById}
          />)
      }
    </div>
  );
};

export default FeedRoute;
