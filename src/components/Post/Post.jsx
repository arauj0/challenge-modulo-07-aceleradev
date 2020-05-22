import React from 'react';
// , { useState }

import { Link } from 'react-router-dom';

import './Post.scss';

const Post = ({ postInfo, userInfo }) => {
  return (
    <article className="post" data-testid="post">
        <div className="post__header">
            <div className="user">
              <div className="user__thumb">
                <img src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-profile.jpg" alt="perfil pantera"/>
              </div>

              <Link to="/" className="user__name">blackpanther</Link>
            </div>
            
            <button className="post__context">
              <span className="follow-btn is-following">Seguindo</span>
              {/* <span className="follow-btn">Seguir</span> */}
            </button>
        </div>

        <figure className="post__figure">
          <img src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-1.jpg" alt="post pantera"/>
        </figure>

        <div className="post__controls">
          <button className="post__control">
            <i class="far fa-heart"></i>
          </button>

          <div className="post__status">
            <div className="user">
              <span>curtido por <Link to="/">Santino Rowe</Link> e outra 
              2 pessoas</span>
            </div>
          </div>
        </div>
    </article>
  );
};

export default Post;
