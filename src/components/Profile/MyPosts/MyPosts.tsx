import React, {ChangeEvent} from 'react';
import st from './MyPosts.module.css';
import Post from './Post/Post';
import {MyPostsType} from './MyPostsContainer';


const MyPosts = (props: MyPostsType) => {

    let postsElement = props.posts.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const onAddPost = () => {
        props.addPost(props.newPostText.newPostText)
    }
    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
    }

    return (
        <div className={st.myPostAll}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        value={props.newPostText.newPostText}
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
