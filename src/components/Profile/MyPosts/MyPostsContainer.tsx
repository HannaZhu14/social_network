import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {RootStateType} from '../../../redux/store';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profile-reducer';

type mapDispatchToPropsType = {
    updateNewPostTextAC: (text: string) => void
    addPost: (postMessage: string) => void
}


let mapStateToProps = (state: RootStateType) => { // этот объект настраивает св-ва , которые мы возьмем из стейта
    return {
        newPostText: state.ProfilePage.newPostText,
        posts: state.ProfilePage.posts
    }
}

let mapDispatchToProps = (dispatch: any): mapDispatchToPropsType => {// этот объект настраивает коллбэки , которые мы будем отправлять в презинтационную компоненту
    return {
        updateNewPostTextAC: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        },
        addPost: (postMessage: string) => {
            dispatch(addPostAC(postMessage))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;


// type MyPostsContainerType = {
//     // store: StoreType
// }
//
//
// const MyPostsContainer = (props: MyPostsContainerType) => {
//
//     // let newPostText = props.store.getState().ProfilePage.newPostText
//     // let posts = props.store.getState().ProfilePage.posts
//
// const addPost = () => {
//     let action = addPostAC(newPostText)
//     props.store.dispatch(action)
// }
//     //
//     // const newTextChangeHandler = (text: string) => {
//     //     let action = updateNewPostTextAC(text)
//     //     props.store.dispatch(action)
//     // }
//
//     return (
//         <StoreContext.Consumer>
//             {store => {
//
//
//                 let newPostText = store.getState().ProfilePage.newPostText
//                 const addPost = () => {
//                     let action = addPostAC(newPostText)
//                     store.dispatch(action)
//                 }
//
//                 const newTextChangeHandler = (text: string) => {
//                     let action = updateNewPostTextAC(text)
//                     store.dispatch(action)
//                 }
//
//                 return <MyPosts updateNewPostTextAC={newTextChangeHandler}
//                                 addPost={addPost}
//                                 newPostText={newPostText}
//                                 posts={store.getState().ProfilePage.posts}
//                 />
//             }
//             }
//         </StoreContext.Consumer>
//         // <MyPosts updateNewPostTextAC={newTextChangeHandler}
//         //          addPost={addPost}
//         //          newPostText={newPostText}
//         //          posts={posts}
//         // />
//     );
// }

