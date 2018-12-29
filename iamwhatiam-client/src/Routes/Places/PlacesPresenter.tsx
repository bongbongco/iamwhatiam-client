import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import Place from "../../Components/Place";
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

const PlacesPresenter: React.SFC<IProps> = ({
    data: { GetMyPlaces: { places = null } = {} } = {},
    loading
}) => (
    <React.Fragment>
        <Helmet>
            <title>공간 목록 | iamWhatiam</title>
        </Helmet>
        <Header title={"공간 목록"} backTo={"/"} />
        <Container>
            {!loading &&
            places &&
            places.length === 0 && 
            "추가된 공간이 없습니다. "
            }
            {!loading &&
            places &&
            places.map(place => (
                <Place
                    key={place!.id}
                    fav={place!.isFav}
                    name={place!.name}
                    address={place!.address}
                />
            ))} 
                <SLink to={routes.addPlace}>공간 추가하기</SLink>
        </Container>
    </React.Fragment>
);

export default PlacesPresenter;