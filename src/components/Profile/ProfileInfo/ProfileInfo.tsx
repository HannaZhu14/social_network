import React from 'react';
import cl from './ProfileInfo.module.css';
import {UserProfileType} from '../../../redux/profile-reducer';
import Preloader from '../../common/Preloader/Preloader';


type ProfileInfoType = {
    profile: UserProfileType | null
}

const ProfileInfo = (props:ProfileInfoType) => {

    if(!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    src={'https://media-exp1.licdn.com/dms/image/C561BAQGxnroXHKJliQ/company-background_10000/0/1528589064522?e=2159024400&v=beta&t=JswjRyVb9YKUlFGkQkMc_NH0lUzrKumnrXVZtMQLUOs'}
                    alt={'panorama'}/>
            </div>
            <div className={cl.description_block}>
                <img src={props.profile.photos.large} alt={''}/>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
            </div>
        </div>
    );
}

export default ProfileInfo;