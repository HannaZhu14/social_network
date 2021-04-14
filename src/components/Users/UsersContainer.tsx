import React from 'react';
import {connect} from 'react-redux';
import {RootReduxState} from '../../redux/redux-store';
import {
    follow,
    InitialStateType,
    setCurrentPages,
    setUsers, setUsersTotalCount, toggleIsFetching,
    unFollow,
    UserType
} from '../../redux/users-reduser';
import axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';


class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setUsersTotalCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPages(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items);
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
}
type mapDispatchToPropsType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPages: (pageNumber: number) => void
    setUsersTotalCount: (count: number) => void
    toggleIsFetching: (isFetching: boolean) => void

}
export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: RootReduxState): mapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}


let dispatch: mapDispatchToPropsType = {
    follow,
    unFollow,
    setUsers,
    setCurrentPages,
    setUsersTotalCount,
    toggleIsFetching
}


export default connect(mapStateToProps, dispatch)(UsersContainer);

