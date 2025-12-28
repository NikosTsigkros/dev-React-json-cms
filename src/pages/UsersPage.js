import React from 'react';
import Manager from '../core/Manager';

function UsersPage() {
  return (
    <div className="container">
      <h1>Users Management</h1>
      
      <div className="card">
        <h2>User List</h2>
        <Manager module="users" view="list" />
      </div>

      <div className="card">
        <h2>User Form</h2>
        <Manager module="users" view="form" params={{ replaceParams: { id: 1 } }} />
      </div>
    </div>
  );
}

export default UsersPage;
