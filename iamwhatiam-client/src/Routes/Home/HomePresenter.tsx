import React from "react";
import Helmet from "react-helmet";
import Sidebar from "react-sidebar";
import Menu from "../../Components/Menu";
import Topics from "../../Components/Topics";
import styled from "../../typed-components";
import { 
    getPlaces,
} from "../../types/api";

const Container = styled.div`
`;

const Content = styled.div`
    padding: 10px;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 935px;
    margin: 0 auto;
    align-items: center;
`;

const MenuButton = styled.button`
    appearance: none;
    padding: 10px;
    position: absolute;
    top: 10px;
    left: 10px;
    text-align: center;
    font-weight: 800;
    border: 0;
    cursor: pointer;
    font-size: 20px;
    transform: rotate(90deg);
    z-index: 2;
    background-color: transparent;
`;

interface IProps {
    isMenuOpen: boolean;
    toggleMenu: () => void;
    data?: getPlaces;
    loading: boolean;
}

const HomePresenter: React.SFC<IProps> = ({
    data: { GetMyPlaces: { places = null } = {} } = {},
    isMenuOpen, 
    toggleMenu,
    loading,
}) => (
    <Container>
        <Helmet>
            <title>주제 목록 | iamWhatiam</title>
        </Helmet>
        <Sidebar
            sidebar={<Menu />}
            open={isMenuOpen}
            onSetOpen={toggleMenu}
            styles={{ 
                sidebar: { 
                    backgroundColor: "white",
                    width: "80%",
                    zIndex: "10"
                } 
            }}
        >
            {!loading && <MenuButton onClick={toggleMenu}>|||</MenuButton>}
        </Sidebar>
        <Content>
            <Topics />
        </Content>
    </Container>
);

export default HomePresenter;