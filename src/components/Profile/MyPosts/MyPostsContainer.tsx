import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {addPostAC, InitialStateType, updateNewPostTextAC} from '../../../redux/profile-reducer';
import { RootReduxState } from '../../../redux/redux-store';
import { Dispatch } from 'redux';


type mapStateToPropsType = {
    posts:InitialStateType
    newPostText: InitialStateType
}
type mapDispatchToPropsType = {
    updateNewPostTextAC: (text: string) => void
    addPost: (postMessage: string) => void
}
export type MyPostsType = mapStateToPropsType & mapDispatchToPropsType


let mapStateToProps = (state: RootReduxState):mapStateToPropsType => {
    return {
        newPostText: state.ProfilePage,
        posts: state.ProfilePage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
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


