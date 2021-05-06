import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootReduxState} from "../../redux/redux-store";
import {getUserProfile, UserProfileType} from "../../redux/profile-reducer";
import {withRouter, RouteComponentProps} from "react-router-dom";



class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2";
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} />
        )
    }
}


type PathParamsType = {
    userId: string | undefined
}
type mapStateToPropsType = {
    profile: UserProfileType | null
}
type mapDispatchToPropsType = {
    getUserProfile: any
}
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType
export type OwnPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: RootReduxState): mapStateToPropsType => ({profile: state.ProfilePage.profile});
let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent);