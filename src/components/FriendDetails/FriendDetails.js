import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    return (
        <div style={{ margin: '50px 50px', textAlign: 'center' }}>
            <h1>Name: {friend.name}</h1>
            <p>Call him/her: {friend.phone}</p>
            <p>Username: {friend.username}</p>
            <p>Email: {friend.email}</p>
            <p>Website: {friend.website}</p>
        </div>
    );
};

export default FriendDetails;