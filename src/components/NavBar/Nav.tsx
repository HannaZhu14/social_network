import React from 'react';
import {NavLink} from 'react-router-dom';
import cl from './Nav.module.css'


const Nav = () => {
    return (
        <nav className={cl.nav}>
            <div className={cl.item}>
                <NavLink to={'/profile'} activeClassName={cl.active}>Profile</NavLink>
            </div>
            <div className={cl.item}>
                <NavLink to={'/dialogs'} activeClassName={cl.active}>Messages</NavLink>
            </div>
            <div className={cl.item}>
                <NavLink to={'/users'} activeClassName={cl.active}>Users</NavLink>
            </div>
            <div className={cl.item}>
                <NavLink to={'/news'} activeClassName={cl.active}>News</NavLink>
            </div>
            <div className={cl.item}>
                <NavLink to={'/music'} activeClassName={cl.active}>Music</NavLink>
            </div>
            <div className={cl.item}>
                <NavLink to={'/settings'} activeClassName={cl.active}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Nav;