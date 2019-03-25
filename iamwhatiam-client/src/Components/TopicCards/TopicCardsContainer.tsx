import React from "react";
import { Query } from "react-apollo";
import { GET_TOPICS } from "../../sharedQueries";
import { getTopics } from "../../types/api";
import TopicCardsPresenter from "./TopicCardsPresenter";

class TopicsQuery extends Query<getTopics> {}

class TopicCardsContainer extends React.Component {
    
    public render() {
        return (
            <TopicsQuery query={GET_TOPICS}>
                {({ data, loading }) => (
                    <TopicCardsPresenter data={data} loading={loading} />
                )} 
            </TopicsQuery>
        );
    }
}

export default TopicCardsContainer;