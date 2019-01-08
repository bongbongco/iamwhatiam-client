import React from "react";
import styled from "../../typed-components";


const Container = styled.div`
    margin-bottom: 12px;
`;
const CommenterPhoto = styled.img`
    width: 30px;
    border-radius: 50%;
    margin-right: 15px;
`;
const Comments = styled.ul`
`;

const Comment = styled.li`
    margin-bottom: 7px;
    display: flex;
    align-items: center;
`;
const Username = styled.span`
    font-weight: 600;
    margin-right: 5px;
`;

const Message = styled.span`
`;

/*
interface IProps {
    title: string;
    backTo: string;
}
*/

const TopicComments: React.SFC<any> = ({ }) => (
    <Container>
        <Comments>
            <Comment>
                <CommenterPhoto src={
                    "https://avatars1.githubusercontent.com/u/3170006?s=400&v=4"
                } />
                <Username>{"이승용"}</Username>
                <Message>프로토타입 작성 중입니다.</Message>
            </Comment>
            <Comment>
                <CommenterPhoto src={
                    "https://avatars1.githubusercontent.com/u/3170006?s=400&v=4"
                } />
                <Username>{"이민지"}</Username>
                <Message>프로토타입 작성 중입니다.</Message>
            </Comment>
        </Comments>
    </Container>
);

export default TopicComments;