import React, { useState } from 'react';

import SuccessMessage from '../../components/SuccessMessage';

import './UserForm.scss';

const UserForm = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        username,
        email,
        avatar
      })
    }).then(() => setSubmit(true));
  }

  return (
    <>
      <section className="profile" data-testid="user-form">
        <div className="container">
          <div className="profile-data">
            <div className="user">
              <div className="user__thumb">
                { avatar
                  ? <img src={avatar} alt="perfil"/>
                  : <img src="https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png" alt="perfil"/>
                }
              </div>

              <p className="user__name">
                {name}
                <span>@{username}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <form onSubmit={handleSubmit} className="post__form">
        <div className="container">
          <div className="post__form__wrapper">
            <label htmlFor="name">Nome</label>
            <input 
              id="name"
              placeholder="Ex: Fulano da Silva"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />

            <label htmlFor="user">Usuário</label>
            <input 
              id="user" 
              placeholder="Ex: Fulano_da_Silva"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
            />

            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email"
              placeholder="Ex: fulano@gmail.com"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />

            <label htmlFor="url-img">Url da Imagem de Perfil (use a url da imagem do Linkedin)</label>
            <input 
              id="url-img"
              placeholder="http://..."
              onChange={({ target }) => setAvatar(target.value)}
            />

            <button type="submit">Cadastrar</button>
          </div>
        </div>
      </form>
  
      {submit && <SuccessMessage />}
    </>
  );
};

export default UserForm;
