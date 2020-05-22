import React from 'react';
// , { useState }

// import SuccessMessage from '../../components/SuccessMessage';

import './UserForm.scss';

const UserForm = () => {
  return (
    <>
      <section className="profile" data-testid="user-form">
        <div className="container">
          <div className="profile-data">
            <div className="user">
              <div className="user__thumb">
                <img src="https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png" alt="perfil"/>
              </div>

              <p className="user__name">
                name
                <span>@</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="post__form">
        <div className="container">
          <div className="post__form__wrapper">
            <label htmlFor="name">Nome</label>
            <input 
              id="name"
              placeholder="Ex: Fulano da Silva"
            />

            <label htmlFor="user">Usuário</label>
            <input 
              id="user" 
              placeholder="Ex: Fulano_da_Silva"
            />

            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email"
              placeholder="Ex: fulano@gmail.com"
            />

            <label htmlFor="url-img">Url da Imagem de Perfil (use a url da imagem do Linkedin)</label>
            <input 
              id="url-img"
              placeholder="http://..."
            />

            <button>Cadastrar</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserForm;
