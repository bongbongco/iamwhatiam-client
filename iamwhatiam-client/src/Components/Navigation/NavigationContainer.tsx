import React from "react";
import { Query } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { USER_PROFILE } from "../../sharedQueries";
import {
    userProfile 
} from "../../types/api";
import NavigationPresenter from "./NavigationPresenter";

interface IState {
    isMenuOpen: boolean;
}

interface IProps extends RouteComponentProps<any> {}

class ProfileQuery extends Query<userProfile> {}

class NavigationContainer extends React.Component<IProps, IState> {
    public state = {
        isMenuOpen: false
    }
    public render() {
        const { isMenuOpen } = this.state;
        return (
            <ProfileQuery query={USER_PROFILE}>
                {({ data, loading }) => (
                    <NavigationPresenter 
                        data={data} 
                        loading={loading} 
                        isMenuOpen={isMenuOpen}
                        toggleMenu={this.toggleMenu}
                    />
                )} 
            </ProfileQuery>
        );
    }
    public toggleMenu = () => {
        this.setState(state => {
            return {
                isMenuOpen: !state.isMenuOpen
            };
        })
    }
}

export default NavigationContainer;