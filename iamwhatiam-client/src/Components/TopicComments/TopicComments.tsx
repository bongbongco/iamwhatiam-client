import React from "react";
import styled from "../../typed-components";


const Container = styled.div`
    margin-bottom: 12px;
`;
/*
const Comments = styled.ui`
`;

const Comment = styled.li`
    margin-bottom: 7px;
`;
*/
const Username = styled.span`
    font-weight: 600;
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
        <Username>이승용</Username>
        <Message>프로토타입 작성 중입니다.</Message>
    </Container>
);

export default TopicComments;