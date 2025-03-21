import React, { useState } from "react";
import "./dashboard-styles/setting.css";
import Profile from "./profile";
import AccountTab from "./AccountTab";
import PrivacyTab from "./PrivacyTab";
import SystemPreferencesTab from "./preferenceTab";
import UserRolesTab from "./UserRoles";
const Settings = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  const renderContent = () => {
    switch (activeTab) {
      case "Profile":
        return <div><Profile/></div>;
      case "Account":
        return <div><AccountTab/></div>;
      case "Privacy":
        return <div><PrivacyTab/></div>;
      case "System Preferences":
        return <div><SystemPreferencesTab/></div>;
      case "User Roles":
        return <div><UserRolesTab/></div>;
      default:
        return <div>Select a tab to see the content.</div>;
    }
  };

  return (
    <div className="settings-container">
      <h1>Settings</h1>
      <div className="tabs">
        {["Profile", "Account", "Privacy", "System Preferences", "User Roles"].map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default Settings;
