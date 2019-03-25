import queryString from "query-string";
import React from "react";
import { Query } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { toast } from 'react-toastify';
import {
    getTopic,
    getTopicVariables
} from "../../types/api";
import GetTopicPresenter from "./GetTopicPresenter";
import { GET_TOPIC } from "./GetTopicQueries";

interface IState {
    collapsed: boolean;
}

interface IProps extends RouteComponentProps<any> {}

class GetTopicQuery extends Query<getTopic, getTopicVariables> {}

class GetTopicContainer extends React.Component<IProps, IState> {

    public state = {
        collapsed : true
    };

    public render() {
        const params = queryString.parse(location.search);
        const topicId = Number(params.topicId);
        const { collapsed } = this.state;

        return  (
            <GetTopicQuery
                query={GET_TOPIC}
                onCompleted={data => {
                    if (!data) {
                        toast.error("토픽이 존재하지 않습니다 😥");
                    }
                }}
                variables={{
                    topicId
                }}
            >
                {({ data, loading }) => (
                    <GetTopicPresenter 
                        collapsed={collapsed}
                        data={data} 
                        loading={loading} 
                        onCollapse={this.onCollapse}
                    />
                )}
            </GetTopicQuery>
        );
    }

    public onCollapse = (collapsed: boolean) => {
        this.setState({
            collapsed
        });
    }
}

export default GetTopicContainer;