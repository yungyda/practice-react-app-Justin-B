import React from 'react';
import ProfileCard from './ProfileCard';

function ProfileContainer() {
  const profiles = [
    { name: "Alex", age: 25, bio: "A software engineer who loves hiking." },
    { name: "Taylor", age: 30, bio: "A designer passionate about photography." },
    { name: "Jordan", age: 28, bio: "An artist who teaches kids to code." },
  ];

  return (
    <div className="profile-container">
      <h2>User Profiles</h2>
      <div className="card-grid">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            age={profile.age}
            bio={profile.bio}
          />
        ))}
      </div>
    </div>
  );
}

export default ProfileContainer;
