import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {setAuthUserData} from '../../redux/auth-reducer';
import {RootReduxState} from '../../redux/redux-store';
import {usersAPI} from '../../api/api';


class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        usersAPI.getUserData().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                this.props.setAuthUserData(id, email, login)
            }
        })
    };

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