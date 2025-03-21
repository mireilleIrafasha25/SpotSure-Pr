import React from 'react';
import './dashboard-styles/accountTab.css'; // Import the shared CSS

const AccountTab = () => {
  return (
    <div className="tab-panel account">
      <h2>Account Settings</h2>
      <div className="account-details">
        <div>
          <label>Username</label>
          <input type="text" placeholder="Enter your username" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" placeholder="Enter new password" />
        </div>
      </div>
      <div className="button-group">
        <button className="button-save">Save Changes</button>
        <button className="button-cancel">Cancel</button>
      </div>
    </div>
  );
};

export default AccountTab;
