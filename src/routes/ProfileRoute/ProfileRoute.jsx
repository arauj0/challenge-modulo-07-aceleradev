/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';

import Loading from '../../components/Loading';

const ProfileRoute = () => {
  const { username } = useParams('username');

  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  const loadUser = () => {
    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users')
      .then(response => response.json())
      .then(data => {
        const fetchUser = data.find(user => user.username === username);
        
        setUser(fetchUser);
      });
  }

  const loadPosts = () => {
    if (user.id) {
      fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${user.id}/posts`)
        .then(response => response.json())
        .then(data => setPosts(data));
    }  
  }

  useEffect(() => {
    loadUser();
  }, []);

  useEffect(() => {
    loadPosts();
  }, [user]);

  return (
    <div data-testid="profile-route">
      {user
        ? 
        <>
          <UserProfile 
            avatar={user.avatar} 
            name={user.name} 
            username={user.username} 
          />
          <UserPosts posts={posts} />
        </>
        : <Loading />
      }
    </div>
  );
};

export default ProfileRoute;
