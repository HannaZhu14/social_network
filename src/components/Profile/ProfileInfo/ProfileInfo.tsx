import React from 'react';
import cl from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src={'https://media-exp1.licdn.com/dms/image/C561BAQGxnroXHKJliQ/company-background_10000/0/1528589064522?e=2159024400&v=beta&t=JswjRyVb9YKUlFGkQkMc_NH0lUzrKumnrXVZtMQLUOs'}
                    alt={'panorama'}/>
            </div>
            <div className={cl.description_block}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;