import React from 'react';
import {connect} from 'react-redux';
import {RootStateType, UsersPageType} from '../../redux/store';
import {followAC, setUsersAC, unFollowAC} from '../../redux/users-reduser';
import Users from './Users';

let mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
