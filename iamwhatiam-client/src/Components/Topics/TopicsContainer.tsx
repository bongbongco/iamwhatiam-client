import React from "react";
import { Query } from "react-apollo";
import { GET_TOPICS } from "../../sharedQueries";
import { getTopics } from "../../types/api";
import TopicsPresenter from "./TopicsPresenter";

class TopicsQuery extends Query<getTopics> {}

class TopicsContainer extends React.Component {
    public render() {
        return (
            <TopicsQuery query={GET_TOPICS}>
                {({ data, loading }) => (
                    <TopicsPresenter data={data} loading={loading} />
                )} 
            </TopicsQuery>
        );
    }
}

export default TopicsContainer;