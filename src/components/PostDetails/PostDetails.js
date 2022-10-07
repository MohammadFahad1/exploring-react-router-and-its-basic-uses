import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const { id, title, body, userId } = post;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/friend/${userId}`)
    }
    return (
        <div style={{ margin: '50px', textAlign: 'center' }}>
            <h1>Post Details of: {id}</h1>
            <h2>{title}</h2>
            <p>{body}</p>
            <p><small>UserId: {userId}</small></p>
            <button onClick={handleNavigate}>Get the Author</button>
        </div>
    );
};

export default PostDetails;