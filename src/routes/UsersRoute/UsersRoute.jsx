import React from 'react';
// , { useState, useEffect } 

import UsersList from '../../containers/UsersList';

const UsersRoute = () => {
  return (
    <div className="container" data-testid="users-route">
      <UsersList />
    </div>
  );
};

export default UsersRoute;
