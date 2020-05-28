import React from 'react';

import Post from '../../components/Post';

import './UserPosts.scss';

const UserPosts = ({ posts }) => {
  return (
    <div className="container" data-testid="user-posts">
      <section className="user-posts">
        {posts.length > 0
          ? 
            posts?.map(post => (
              <Post 
                key={post.id}
                postInfo={post}
              />
            ))
          : 
            <div className="no-posts">
              <span className="no-posts__content">Não há publicações deste usuário</span>
              <span className="no-posts__emoji" role="img" aria-label="Emoji sad">😥</span>
            </div>
        }
      </section>
    </div>
  );
}

export default UserPosts;
