import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import Sidebar from "react-sidebar";
import Menu from "../../Components/Menu";
import SearchBar from "../../Components/SearchBar";
import Topics from "../../Components/Topics";
import routes from "../../routes";
import styled from "../../typed-components";
import { 
    getTopics,
} from "../../types/api";

const Container = styled.div`
    background-color: #FAFAFA;
    display: flex;
    flex-direction: column;
`;

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
`;

const Content = styled.div`
    padding: 10px;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    width: 100%
    max-width: 935px;
    margin: 0 auto;
    align-items: center;
`;
const MenuButton = styled.button`
    padding: 10px;
    top: 10px;
    left: 10px;
    text-align: center;
    font-weight: 800;
    border: 0;
    cursor: pointer;
    font-size: 20px;
    transform: rotate(90deg);
    background-color: transparent;
`;

const SLink = styled(Link)`
    appearance: none;
    margin-left: 10px;
    cursor: pointer;
    z-index: 2;
`;

const Navigation = styled.div`
    margin-top: 5px;
    padding: 10px;
    top: 10px;
    left: 10px;
    font-weight: 800;
    font-size: 20px;
    margin-left: 30px;
    z-index: 2;
`;

const FakeInput = styled.div`
    width: 100%;
    max-width: 600;
    border: 1px solid #e6e6e6;
    background-color: white;
    border-radius: 3px;
    margin: 50px 0px;
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 300;
    padding: 15px;
`;

const Grey = styled.span`
    color: ${props => props.theme.greyColor};
`;

interface IProps {
    isMenuOpen: boolean;
    toggleMenu: () => void;
    data?: getTopics;
    loading: boolean;
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    searchKeyword: string;
}

const HomePresenter: React.SFC<IProps> = ({
    data: { GetMyTopics: { topics = null } = {} } = {},
    isMenuOpen, 
    toggleMenu,
    loading,
    searchKeyword,
    onInputChange
}) => (
    <Container>
    <React.Fragment>
        <Helmet>
            <title>주제 목록 | iamWhatiam</title>
        </Helmet>
        <Header>
            <div>
            <span>
                iWi
            </span>

            </div>
            <Sidebar
                sidebar={<Menu />}
                open={isMenuOpen}
                onSetOpen={toggleMenu}
                styles={{ 
                    sidebar: { 
                        backgroundColor: "white",
                        width: "50%",
                        zIndex: "10"
                    } 
                }}
            >
                {!loading && <MenuButton onClick={toggleMenu}>|||</MenuButton>}
            </Sidebar>
            <SearchBar 
                name={"searchKeyword"}
                onChange={onInputChange}
                value={searchKeyword}
                onBlur={null}
            />
            <Navigation>
                <SLink to={routes.trip}>탐색하기</SLink>
                <SLink to={routes.trip}>돌아보기</SLink>
            </Navigation>
        </Header>
        <Content>
            <SLink to={routes.addTopic}>
                <FakeInput>
                    <Grey>
                        당신의 생각을 공유해주세요
                    </Grey>
                </FakeInput>
            </SLink>
            <Topics />
        </Content>
    </React.Fragment>
    </Container>
);

export default HomePresenter;