import React from 'react';
import './ProfileCard.css'; // Optional if you want component-specific styles

function ProfileCard({ name, age, bio }) {
  return (
    <div className="profile-card">
      <h3>{name}</h3>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Bio:</strong> {bio}</p>
    </div>
  );
}

export default ProfileCard;
