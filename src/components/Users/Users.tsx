import React from 'react';
import st from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import {UsersPropsType} from './UsersContainer';

type UserType = {
    onPageChanged: (pageNumber: number) => void
}

let Users = (props: UsersPropsType & UserType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span key={(p)} className={props.currentPage === p ? st.selectedPage : ''} onClick={(_e) => {
                    props.onPageChanged(p)
                }}>{p}</span>
            })}
        </div>

        {
            props.usersPage.users.map(u => <div key={u.id}>

                <div>
                    <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={st.userPhoto}
                         alt={'avatar'}/>
                </div>
                <div>
                    {
                        u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>UnFollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
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