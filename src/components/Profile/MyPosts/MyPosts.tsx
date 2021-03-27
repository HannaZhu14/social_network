import React, {ChangeEvent} from 'react';
import cl from './MyPosts.module.css';
import Post from './Post/Post';
import {PostType} from '../../../redux/store';

type MyPostsType = {
    posts: Array<PostType>
    newPostText: string
    addPost: (postMessage: string) => void
    updateNewPostTextAC: (newText: string) => void
}


const MyPosts = (props: MyPostsType) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const onAddPost = () => {
        props.addPost(props.newPostText)
    }
    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostTextAC(text)
    }


    return (
        <div className={cl.myPostAll}>
            <h3>My posts</h3>
            <div>

                <div>
                    <textarea
                        value={props.newPostText}
                        onChange={newTextChangeHandler}
                    />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div>
                {postsElement}
            </div>
        </div>

    );
}

export default MyPosts;
