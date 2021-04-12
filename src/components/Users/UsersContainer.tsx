import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {RootReduxState} from '../../redux/redux-store';
import {
    followAC,
    InitialStateType,
    setCurrentPagesAC,
    setUsersAC, setUsersTotalCountAC, toggleIsFetchingAC,
    unFollowAC,
    UserType
} from '../../redux/users-reduser';
import axios from 'axios';
import Users from './Users';
import preloader from '../../assets/images/preloader.svg'

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
            {this.props.isFetching ? <img src={preloader} alt={'loading'}/> : null}
            <Users onPageChanged={this.onPageChanged}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   usersPage={this.props.usersPage}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
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
    unfollow: (userID: number) => void
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
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPages: (pageNumber: number) => {
            dispatch(setCurrentPagesAC(pageNumber))
        },
        setUsersTotalCount: (totalCount: number) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

