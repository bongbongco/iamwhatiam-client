import React from "react";
import { MutationFn } from "react-apollo";
// import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import Form from "../../Components/Form";
import Input from "../../Components/Input";
// import routes from "../../routes";
import styled from "../../typed-components";

const Container = styled.div`
    border: 1px solid #e6e6e6;
    background-color: white;
    border-radius: 3px;
    margin-left: 10px;
    width: 100%;
    max-width: 600;
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
`;
/*
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
    margin-left: 5px;
    margin-right: 15px;
`;

const Content = styled.span`
    color: ${props => props.theme.greyColor};
    font-size: 14px;
`;
*/
const ExtendedInput = styled(Input)`
    margin-bottom: 40px;
`;
/*
const ExtendedLink = styled(Link)`
    text-decoration: underline;
    margin-bottom: 20px;
    display: block;
`;
*/
interface IProps {
    subject: string;
    content: string;
    loading: boolean;
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: MutationFn;
}

const AddTopicPresenter: React.SFC<IProps> = ({
    onInputChange,
    onSubmit,
    subject,
    content,
    loading
}) => (
    <React.Fragment>
    <Container>
        <Form submitFn={onSubmit}>
            <ExtendedInput
                placeholder={"제목"} 
                type={"text"}
                onChange={onInputChange}
                value={subject}
                name={"subject"}
            />
            <ExtendedInput
                placeholder={"내용"} 
                type={"text"}
                onChange={onInputChange}
                value={content}
                name={"content"}
            />
            <Button 
                onClick={null} 
                value={loading ? "추가 중" : "추가하기"} 
            />
        </Form>
    </Container>
    </React.Fragment>
);

export default AddTopicPresenter;