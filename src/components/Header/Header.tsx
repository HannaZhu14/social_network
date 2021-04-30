import React from 'react';
import {NavLink} from 'react-router-dom';
import cl from './Header.module.css';

type HeaderType = {
    login: null | string
    isAuth: boolean
}

const Header = (props: HeaderType) => {
    return (

        <header className={cl.header}>
            <img src={'https://upload.wikimedia.org/wikipedia/commons/d/d1/ShareX_Logo.png'} alt={'logo'}/>
            <div className={cl.loginBlock}>
                <div>{ props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }</div>
            </div>
        </header>
    );
}

export default Header;