import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <NavLink style={{ padding: '5px 10px', textDecoration: 'none' }} to='/'

                className={({ isActive, isPending }) => {
                    return isActive ? "active" : isPending ? "pending" : "";
                }}

            >Home</NavLink>
            <NavLink style={{ padding: '5px 10px', textDecoration: 'none' }} to='/about'

                className={({ isActive, isPending }) => {
                    return isActive ? "active" : isPending ? "pending" : "";
                }}

            >About</NavLink>
            <NavLink style={{ padding: '5px 10px', textDecoration: 'none' }} to='/products'

                className={({ isActive, isPending }) => {
                    return isActive ? "active" : isPending ? "pending" : "";
                }}

            >Products</NavLink>
            <NavLink style={{ padding: '5px 10px', textDecoration: 'none' }} to='/friends'

                className={({ isActive, isPending }) => {
                    return isActive ? "active" : isPending ? "pending" : "";
                }}

            >Friends</NavLink>
            <NavLink style={{ padding: '5px 10px', textDecoration: 'none' }} to='/posts'

                className={({ isActive, isPending }) => {
                    return isActive ? "active" : isPending ? "pending" : "";
                }}

            >Posts</NavLink>
        </div>
    );
};

export default Header;