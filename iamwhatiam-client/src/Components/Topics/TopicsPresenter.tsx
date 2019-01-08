import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import Topic from "../../Components/Topic";
import routes from "../../routes";
import styled from "../../typed-components";
import { getPlaces } from "../../types/api";

const Container = styled.div`
    padding: 0 40px;
`;

const SLink = styled(Link)`
    text-decoration: underline;
`;

interface IProps {
    data?: getPlaces;
    loading: boolean;
}

const TopicsPresenter: React.SFC<IProps> = ({
    data: { GetMyPlaces: { places = null } = {} } = {},
    loading
}) => (
    <React.Fragment>
        <Helmet>
            <title>주제 목록 | iamWhatiam</title>
        </Helmet>
        <Container>
            {!loading &&
            places &&
            places.length === 0 && 
            "추가된 주제가 없습니다. "
            }
            {!loading &&
            places &&
            places.map(place => (
                <Topic
                    key={place!.id}
                    id={place!.id}
                    fav={place!.isFav}
                    name={place!.name}
                    address={place!.address}
                />
            ))} 
                <SLink to={routes.addPlace}>주제 추가하기</SLink>
        </Container>
    </React.Fragment>
);

export default TopicsPresenter;