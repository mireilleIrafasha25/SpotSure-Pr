import React from 'react';
import './dashboard-styles/userRoleTab.css';

const UserRolesTab = () => {
  const roles = ['Admin', 'Editor', 'Viewer']; // Sample roles

  return (
    <div className="tab-panel user-roles">
      <h2>User Roles Management</h2>
      {roles.map((role, index) => (
        <div className="role-item" key={index}>
          <span>{role}</span>
          <button className="assign-role-button">Assign Role</button>
        </div>
      ))}
    </div>
  );
};

export default UserRolesTab;
