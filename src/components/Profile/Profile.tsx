import React from 'react';
// import c from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {StoreType} from '../../redux/store';
import MyPostsContainer from './MyPosts/MyPostsContainer';

type ProfileType = {
    // store: StoreType
}

const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
            {/*<MyPostsContainer store={props.store}*/}
            {/*/>*/}
        </div>
    );
}

export default Profile;