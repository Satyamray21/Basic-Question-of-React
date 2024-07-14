// UserProfile.js
import React from 'react';
import { useParams } from 'react-router-dom';

// Static dataset
const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    website: 'johndoe.com',
    company: { name: 'Doe Enterprises' },
    address: { street: '123 Main St', city: 'Anytown' },
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '987-654-3210',
    website: 'janesmith.com',
    company: { name: 'Smith Co.' },
    address: { street: '456 Elm St', city: 'Othertown' },
  },
  // Add more users as needed
];

const UserProfile = () => {
  const { userId } = useParams();
  const user = users.find((user) => user.id === parseInt(userId));

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>Company: {user.company.name}</p>
      <p>Address: {user.address.street}, {user.address.city}</p>
    </div>
  );
};

export default UserProfile;
