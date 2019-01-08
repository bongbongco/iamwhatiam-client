import React from "react";
import { MutationFn } from "react-apollo";
// import { Link } from "react-router-dom";
import bgImage from "../../images/bg.png";
import styled from "../../typed-components";
import TopicComments from '../TopicComments';

const Container = styled.div`
    border: 1px solid #e6e6e6;
    background-color: white;
    border-radius: 3px;
    margin-left: 10px;
    width: 100%;
    max-width: 600;
    margin-bottom: 60px;
    &:last-child {
        margin-bottom: 0;
    }
`;

const Header = styled.header`
    padding: 15px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e6e6e6;;
    height: 30px;
`;

const HeaderColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

const CreatorPhoto = styled.img`
    width: 30px;
    border-radius: 50%;
    margin-right: 15px;
`;

const Creator = styled.span`
    display: flex;
    flex-direction: column;
`;

const Location = styled.span`
    font-size: 12px;
`;

const Body = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Meta = styled.div`
    padding: 15px;
    padding-bottom: 0;
    padding-top: 10px;
`;


const TopicColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

const TopicPhoto = styled.img`
    width: 60px;
    height: 60px;
    margin-right: 15px;
`;

const Name = styled.span`
    display: block;
`;

const Icon = styled.span`
    cursor: pointer;
`;

const Address = styled.span`
    color: ${props => props.theme.greyColor};
    font-size: 14px;
`;

const Likes = styled.span`
    font-weight: 600;
    cursor: pointer;
`;

interface IProps {
    fav: boolean;
    name: string;
    address: string;
    onStarPress: MutationFn;
}

const TopicPresenter: React.SFC<IProps> = ({ 
    onStarPress,
    fav, 
    name, 
    address }) => (
        <Container>
            <Header>
                <CreatorPhoto src={
                    "https://avatars1.githubusercontent.com/u/3170006?s=400&v=4"
                } />
                <HeaderColumn>
                    <Creator>이승용</Creator>
                    <Location>서울</Location>
                </HeaderColumn>
            </Header>
            <Meta>
                <Body>
                    <TopicColumn>
                        <Name>{name}</Name>
                        <Address>{address}</Address>
                    </TopicColumn>
                        <TopicPhoto src={bgImage} />
                </Body>
                <TopicComments />
                 <Icon onClick={onStarPress as any}>{fav ? "★" : "☆"}</Icon>
                     <Likes>15</Likes>
            </Meta>
        </Container>
);

export default TopicPresenter;