import React from 'react';
import {connect} from 'react-redux';
import {RootReduxState} from '../../redux/redux-store';
import {
    follow,
    InitialStateType,
    setCurrentPages,
    setUsers, setUsersTotalCount, toggleIsFetching, toggleIsFollowingProgress,
    unFollow,
    UserType
} from '../../redux/users-reduser';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {usersAPI} from '../../api/api';


class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items);
            this.props.setUsersTotalCount(data.totalCount)
        });
    };
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPages(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items);
        })
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users onPageChanged={this.onPageChanged}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   usersPage={this.props.usersPage}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   setUsersTotalCount={this.props.setUsersTotalCount}
                   setCurrentPages={this.props.setCurrentPages}
                   setUsers={this.props.setUsers}
                   isFetching={this.props.isFetching}
                   toggleIsFetching={this.props.toggleIsFetching}
                   toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
            />
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
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPages: (pageNumber: number) => void
    setUsersTotalCount: (count: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleIsFollowingProgress: (isFetching: boolean, userId: number)=> void

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
    follow,
    unFollow,
    setUsers,
    setCurrentPages,
    setUsersTotalCount,
    toggleIsFetching,
    toggleIsFollowingProgress
}


export default connect(mapStateToProps, dispatch)(UsersContainer);

