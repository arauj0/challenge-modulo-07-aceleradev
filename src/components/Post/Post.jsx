import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import './Post.scss';

const Post = ({ postInfo, userInfo }) => {
  const [following, setFollowing] = useState(false);
  const [like, setLike] = useState(false);

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
            
            <button 
              className="post__context"
              onClick={() => setFollowing(!following)}
            >
              { following 
                ? <span className="follow-btn is-following">Seguindo</span>
                : <span className="follow-btn">Seguir</span> 
              }
            </button>
          </div>
        }

        <figure className="post__figure">
          <img src={imageUrl} alt="post" />
        </figure>

        { userInfo &&
          <div className="post__controls">
            <button 
              className="post__control"
              onClick={() => setLike(!like)}
            >
              { like
                ? <i className="fas fa-heart"></i>
                : <i className="far fa-heart"></i>
              }
            </button>

            <div className="post__status">
              <div className="user">
                <span>
                  curtido por <Link to="/">{comments[0]?.name}</Link>&nbsp;
                  e outra{((comments.length - 1) + like) > 1 && 's'}&nbsp;
                  <Link to="/">{like ? comments.length : comments.length - 1}</Link>&nbsp; 
                  pessoa{((comments.length - 1) + like) > 1 && 's'}
                </span>
              </div>
            </div>
          </div>
        }
    </article>
  );
};

export default Post;
