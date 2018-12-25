import React from "react";
import { MutationFn } from "react-apollo";
import Helmet from "react-helmet";
import Button from "../../Components/Button";
import Form from "../../Components/Form";
import Header from "../../Components/Header";
import Input from "../../Components/Input";
import styled from "../../typed-components";

const Container = styled.div``;

const ExtendedForm = styled(Form)`
    padding: 0px 40px;
`;

const ExtendedInput = styled(Input)`
    margin-bottom: 30px;
`;

interface IProps {
    firstName: string;
    lastName: string;
    email: string;
    profilePhoto: string;
    onSubmit: MutationFn;
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    loading: boolean;
}

const EditAccountPresenter: React.SFC<IProps> = ({
    firstName,
    lastName,
    email,
    onSubmit,
    profilePhoto,
    onInputChange,
    loading
}) => (
    <Container>
        <Helmet>
            <title>사용자 정보 수정 | iamWhatiam</title>
        </Helmet>
        <Header title={"사용자 정보 수정"} backTo={"/"} />
        <ExtendedForm submitFn={onSubmit}>
            <ExtendedInput 
                onChange={onInputChange} 
                type={"text"}
                value={firstName}
                placeholder={"First name"}
                name={"firstName"}
            /> 
            <ExtendedInput 
                onChange={onInputChange} 
                type={"text"}
                value={lastName}
                placeholder={"Last name"}
                name={"lastName"}
            /> 
            <ExtendedInput 
                onChange={onInputChange} 
                type={"email"}
                value={email}
                placeholder={"Email"}
                name={"email"}
            /> 
            <Button onClick={null} value={loading ? "Loading" : "Update"} />
        </ExtendedForm>
    </Container>
);

export default EditAccountPresenter;