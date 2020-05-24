import React from 'react';

import User from '../../components/User';
// import Loading from '../../components/Loading';

import './UsersList.scss';

const UsersList = ({ users }) => {
  const infoUser = {
    avatar: 'https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-profile.jpg',
    name: "T'Challa",
    username: 'blackpanther'
  }

  return (
    <section className="users-list" data-testid="user-list">
      <User infoUser={infoUser}/>
      <User infoUser={infoUser}/>
      <User infoUser={infoUser}/>
      <User infoUser={infoUser}/>
      <User infoUser={infoUser}/>
      <User infoUser={infoUser}/>
      <User infoUser={infoUser}/>
      <User infoUser={infoUser}/>
      <User infoUser={infoUser}/>
    </section>
  )
};

export default UsersList;
