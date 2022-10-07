import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css';

const Post = ({ post }) => {
    const { title, body, id, userId } = post;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/friend/${userId}`);
    }
    return (
        <div className='post'>
            <h3>{title}</h3>
            <p>{body}</p>
            <Link to={`/post/${id}`}><button>Show Details</button></Link>
            <button onClick={handleNavigate}>Show Author Details</button>
        </div>
    );
};

export default Post;