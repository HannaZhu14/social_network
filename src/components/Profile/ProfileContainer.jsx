import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootReduxState} from "../../redux/redux-store";
import {setUserProfile, UserProfileType} from "../../redux/profile-reducer";
import {withRouter, RouteComponentProps} from "react-router-dom";
import {usersAPI} from "../../api/api";


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2;
        }
        usersAPI.setUserProfile(userId).then(data => {
            this.props.setUserProfile(data)
        })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}


type PathParamsType = {
    userId: number
}
type mapStateToPropsType = {
    profile: UserProfileType | null
}
type mapDispatchToPropsType = {
    setUserProfile: (profile: UserProfileType) => void
}
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType
export type OwnPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: RootReduxState): mapStateToPropsType => ({profile: state.ProfilePage.profile});
let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);