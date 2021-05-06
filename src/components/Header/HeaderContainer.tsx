import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {getAuthUserData} from '../../redux/auth-reducer';
import {RootReduxState} from '../../redux/redux-store';



class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
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
    getAuthUserData: any
}
type HeaderPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: RootReduxState): mapStateToPropsType => ({
    id: state.auth.id,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth

});

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);