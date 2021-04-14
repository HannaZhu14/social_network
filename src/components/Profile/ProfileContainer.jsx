import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {RootReduxState} from "../../redux/redux-store";
import {setUserProfile, UserProfileType} from "../../redux/profile-reducer";
import {withRouter, RouteComponentProps} from "react-router-dom";



type PathParamsType = {
    userId: number
}
type mapStateToPropsType = {
    profile: UserProfileType | null
}
type mapDispatchToPropsType = {
    setUserProfile: (profile: UserProfileType) => void
}
export type OwnPropsType =  mapStateToPropsType & mapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}



let mapStateToProps = (state: RootReduxState): mapStateToPropsType => ({profile: state.ProfilePage.profile});


let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);