import React from 'react';

import { Link } from 'react-router-dom';

const User = ({ infoUser })  => {
  const {avatar, name, username, } = infoUser;
  const url = `/users/${username}`;

  return (
    <article className="post" data-testid="user">
      <header className="post__header">
        <Link to={url} className="user">
          <div className="user__thumb">
            <img src={avatar} alt={`perfil de ${username}`}/>
          </div>

          <span className="user__name">{name}</span>
        </Link>
      </header>
    </article>
  )
};

export default User;
