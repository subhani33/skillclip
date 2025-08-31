import React from 'react';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>SkillClip Analytics Dashboard</h1>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Learning Progress</h3>
          {/* Progress visualization will go here */}
        </div>
        <div className="dashboard-card">
          <h3>Skills Overview</h3>
          {/* Skills chart will go here */}
        </div>
        <div className="dashboard-card">
          <h3>Recent Activities</h3>
          {/* Activity feed will go here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;