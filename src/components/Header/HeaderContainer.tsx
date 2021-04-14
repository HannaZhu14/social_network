import React from 'react';
import Header from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {setAuthUserData} from '../../redux/auth-reducer';
import {RootReduxState} from '../../redux/redux-store';


class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        debugger
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

    render() {
        return <Header {...this.props}/>
    }
}

type mapStateToPropsType = {
    id: null | number
    email: null | string
    login: null | string
    isAuth: boolean
}
type mapDispatchToPropsType = {
    setAuthUserData: (id: null | number, email: null | string, login: null | string) => void
}
type HeaderPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: RootReduxState): mapStateToPropsType => ({
    id: state.auth.id,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth

});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);