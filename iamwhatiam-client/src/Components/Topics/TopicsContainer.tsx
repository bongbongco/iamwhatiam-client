import React from "react";
import { Query } from "react-apollo";
import { GET_PLACES } from "../../sharedQueries";
import { getPlaces } from "../../types/api";
import TopicsPresenter from "./TopicsPresenter";

class PlacesQuery extends Query<getPlaces> {}

class TopicsContainer extends React.Component {
    public render() {
        return (
            <PlacesQuery query={GET_PLACES}>
                {({ data, loading }) => (
                    <TopicsPresenter data={data} loading={loading} />
                )} 
            </PlacesQuery>
        );
    }
}

export default TopicsContainer;