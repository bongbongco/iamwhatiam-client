import React from "react";
import { Query } from "react-apollo";
import { GET_PLACES } from "../../sharedQueries";
import { getPlaces } from "../../types/api";
import TopicsPresenter from "./TopicsPresenter";

class TopicsQuery extends Query<getPlaces> {}

class TopicsContainer extends React.Component {
    public render() {
        return (
            <TopicsQuery query={GET_PLACES}>
                {({ data, loading }) => (
                    <TopicsPresenter data={data} loading={loading} />
                )} 
            </TopicsQuery>
        );
    }
}

export default TopicsContainer;