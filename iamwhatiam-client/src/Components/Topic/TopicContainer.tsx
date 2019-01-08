import React from "react";
import { Mutation } from "react-apollo";
import { toast } from 'react-toastify';
import { GET_PLACES } from "../../sharedQueries";
import { editPlace, editPlaceVariables, getPlaces } from "../../types/api";
import TopicPresenter from "./TopicPresenter";
import { EDIT_PLACE } from "./TopicQueries";

interface IProps {
    fav: boolean;
    name: string;
    address: string;
    id: number;
}

class FavMutation extends Mutation<editPlace, editPlaceVariables> {}

class TopicContainer extends React.Component<IProps> {
    public render() {
        const { id, fav, name, address } = this.props;
        return  (
            <FavMutation
                mutation={EDIT_PLACE}
                variables={{
                    isFav: !fav,
                    placeId: id
                }}
                update={(cache, {data}) => {
                    if (data) {
                        const { EditPlace } = data;
                        if (EditPlace.ok) {
                            toast.success("설정이 변경되었습니다");
                        } else if (EditPlace.error) {
                            toast.error(EditPlace.error);
                            return;
                        }
                    }
                    const query: getPlaces | null = cache.readQuery({
                        query: GET_PLACES
                    });
                    cache.writeQuery({ query: GET_PLACES, data: query });
                }} 
                refetchQueries={[{ query: GET_PLACES }]}
            >
                {editPlaceFn => (
                    <TopicPresenter
                        onStarPress={editPlaceFn}
                        fav={fav}
                        name={name}
                        address={address}
                    />
                )}
            </FavMutation>
        );
    }
}

export default TopicContainer;