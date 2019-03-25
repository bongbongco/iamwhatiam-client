import React from "react";
import { Query } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { GET_TOPICS } from "../../sharedQueries";
import { getTopics } from "../../types/api";
import HomePresenter from "./HomePresenter";

interface IState {
    isMenuOpen: boolean;
    searchKeyword: string;
}

interface IProps extends RouteComponentProps<any> {}

class TopicsQuery extends Query<getTopics> {}

class HomeContainer extends React.Component<IProps, IState> {
    public state = {
        isMenuOpen: false,
        searchKeyword: ""
    };
    public render() {
        const { isMenuOpen, searchKeyword } = this.state;
        return (
            <TopicsQuery query={GET_TOPICS}>
                {({ data, loading }) => (
                    <HomePresenter 
                        data={data} 
                        loading={loading} 
                        isMenuOpen={isMenuOpen}
                        toggleMenu={this.toggleMenu}
                        onInputChange={this.onInputChange}
                        searchKeyword={searchKeyword}
                    />
                )} 
            </TopicsQuery>
        );
    }
    public toggleMenu = () => {
        this.setState(state => {
            return {
                isMenuOpen: !state.isMenuOpen
            };
        })
    }
    public onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { name, value }
        } = event;
        this.setState({
            [name]: value
        } as any);
    };
}

export default HomeContainer;