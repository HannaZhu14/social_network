import React from 'react';
import classes from './Post.module.css';


const Post = (props: any) => {
    return (
        <div className={classes.item}>
            <img src={'https://play-lh.googleusercontent.com/XtyURW0mKNnKu_6TzQ5_WpuKF4A7M1oFV6p828eVEWIvTZPtZz2gq5sNM78jpNPMMRmZ'}
                 alt={'ava'}/>
            {props.message}
            <div>
                <span>like </span>{props.likesCount}
            </div>
        </div>
    );
}

export default Post;