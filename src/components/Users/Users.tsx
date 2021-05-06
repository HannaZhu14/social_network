import React from 'react';
import st from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import {UsersPropsType} from './UsersContainer';
import {NavLink} from 'react-router-dom';


type UserType = {
    onPageChanged: (pageNumber: number) => void
}

let Users = (props: UsersPropsType & UserType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    console.log(props.currentPage)
    return <div>
        <div>
            {pages.map(page => {

                return <span key={(page)} className={props.currentPage === page ? st.selectedPage : ''} onClick={() => {
                    debugger
                    props.onPageChanged(page)
                }}>{page}</span>
            })}
        </div>


        {
            props.usersPage.users.map(u => <div key={u.id}>

                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={st.userPhoto}
                             alt={'avatar'}/>
                    </NavLink>
                </div>
                <div>
                    {
                        u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          props.unfollow(u.id);
                                      }}>UnFollow</button>

                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          props.follow(u.id);
                                      }}>Follow</button>
                    }
                </div>

                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <div>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </div>

            </div>)
        }
    </div>;
}

export default Users;