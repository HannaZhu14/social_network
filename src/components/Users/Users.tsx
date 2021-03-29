import React from 'react';
import {UsersPageType} from '../../redux/store';
import st from './users.module.css';


type UsersPropsType = {
    users: UsersPageType
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: any) => void
}

const Users = (props: UsersPropsType) => {

    if (props.users.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmbTeW6ZigluoWxAPFoKzVghKEMTRjpxRRog&usqp=CAU',
                    followed: true,
                    fullName: 'Anna',
                    status: 'I am developer',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://vk-wiki.ru/wp-content/uploads/2019/04/male-user-profile-picture.png',
                    followed: false,
                    fullName: 'Sasha',
                    status: 'I am perfect',
                    location: {city: 'Mockow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://habrastorage.org/webt/5b/db/fe/5bdbfe8c54bc4130948080.jpeg',
                    followed: true,
                    fullName: 'Alisa',
                    status: 'Pretty girl',
                    location: {city: 'Kiew', country: 'Ukraine'}
                },
            ]
        )
    }

    return (
        <div>
            {props.users.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={st.userPhoto}/>
                    </div>
                    <div>
                        {
                            u.followed
                                ? <button onClick={() => { props.follow(u.id) } }>UnFollow</button>
                                : <button onClick={() => { props.unfollow(u.id) } }>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
}

export default Users;
