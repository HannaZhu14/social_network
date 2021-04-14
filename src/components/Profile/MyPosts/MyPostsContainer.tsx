import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {addPost, InitialStateType, updateNewPostText} from '../../../redux/profile-reducer';
import { RootReduxState } from '../../../redux/redux-store';



type mapStateToPropsType = {
    posts:InitialStateType
    newPostText: InitialStateType
}
type mapDispatchToPropsType = {
    updateNewPostText: (text: string) => void
    addPost: (postMessage: string) => void
}
export type MyPostsType = mapStateToPropsType & mapDispatchToPropsType


let mapStateToProps = (state: RootReduxState):mapStateToPropsType => {
    return {
        newPostText: state.ProfilePage,
        posts: state.ProfilePage
    }
}

let dispatch: mapDispatchToPropsType = {updateNewPostText, addPost}

const MyPostsContainer = connect(mapStateToProps, dispatch)(MyPosts);

export default MyPostsContainer;


