import React from 'react';
import {connect} from 'react-redux';
import {RootReduxState} from '../../redux/redux-store';
import {
    follow,
    getUsers,
    InitialStateType,
    unfollow,
} from '../../redux/users-reduser';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';


class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        debugger
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users {...this.props} onPageChanged={this.onPageChanged}/>
        </>
    }
}


type mapStateToPropsType = {
    usersPage: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
type mapDispatchToPropsType = {
    // followSuccess: (userID: number) => void
    // unFollowSuccess: (userID: number) => void
    // toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
    // setCurrentPages: (pageNumber: number) => void
    getUsers: (currentPage: number, pageSize: number)  => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}
export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: RootReduxState): mapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
const dispatch: mapDispatchToPropsType = {
    unfollow,
    follow,
    getUsers
}


export default connect(mapStateToProps, dispatch)(UsersContainer);

