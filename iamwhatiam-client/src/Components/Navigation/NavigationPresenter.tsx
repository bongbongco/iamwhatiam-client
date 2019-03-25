import React from "react";
import Sidebar from "react-sidebar";
import Menu from "../../Components/Menu";
import styled from "../../typed-components";
import { userProfile } from '../../types/api';

const Container = styled.div`
    width: 100%;
    display: flex;
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
    data?: userProfile;
    isMenuOpen: boolean;
    toggleMenu: () => void;
    loading: boolean;
}

const NavigationPresenter: React.SFC<IProps> = ({
    data: { GetMyProfile: { user = null } = {} } = {},
    isMenuOpen, 
    toggleMenu,
    loading,
}) => (
    <Container>
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
        <span>test</span>
        <span>test</span>
        <span>test</span>
    </Container>
);

export default NavigationPresenter;