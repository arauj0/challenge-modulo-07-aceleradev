import React from 'react';
// , { useState }

import { Link } from 'react-router-dom';

import './Post.scss';

const Post = ({ postInfo, userInfo }) => {
  const { imageUrl, comments } = postInfo;

  return (
    <article className="post" data-testid="post">
        { userInfo &&
          <div className="post__header">
            <div className="user">
              <div className="user__thumb">
                <img src={userInfo.avatar} alt={`perfil ${userInfo.username}`} />
              </div>

              <Link to={`/users/${userInfo.username}`} className="user__name">{userInfo.username}</Link>
            </div>
            
            <button className="post__context">
              <span className="follow-btn is-following">Seguindo</span>
              {/* <span className="follow-btn">Seguir</span> */}
            </button>
          </div>
        }

        <figure className="post__figure">
          <img src={imageUrl} alt="post" />
        </figure>

        { userInfo &&
          <div className="post__controls">
            <button className="post__control">
              <i className="far fa-heart"></i>
            </button>

            <div className="post__status">
              <div className="user">
                <span>curtido por <Link to="/">{comments[0]?.name}</Link> e outra 
                {comments.length} pessoas</span>
              </div>
            </div>
          </div>
        }
    </article>
  );
};

export default Post;
