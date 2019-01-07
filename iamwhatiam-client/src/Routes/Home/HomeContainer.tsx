import React from "react";
import { Query } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { GET_PLACES } from "../../sharedQueries";
import { getPlaces } from "../../types/api";
import HomePresenter from "./HomePresenter";

interface IState {
    isMenuOpen: boolean;
}

interface IProps extends RouteComponentProps<any> {}

class PlacesQuery extends Query<getPlaces> {}

class HomeContainer extends React.Component<IProps, IState> {
    public state = {
        isMenuOpen: false
    }
    public render() {
        const { isMenuOpen } = this.state;
        return (
            <PlacesQuery query={GET_PLACES}>
                {({ data, loading }) => (
                    <HomePresenter 
                        data={data} 
                        loading={loading} 
                        isMenuOpen={isMenuOpen}
                        toggleMenu={this.toggleMenu}
                    />
                )} 
            </PlacesQuery>
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

export default HomeContainer;