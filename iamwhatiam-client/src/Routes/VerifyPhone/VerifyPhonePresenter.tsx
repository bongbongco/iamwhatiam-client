import React from "react";
import Helmet from "react-helmet";
import Button from "../../Components/Button";
import Header from "../../Components/Header";
import Input from "../../Components/Input";
import routes from "../../routes";
import styled from "../../typed-components";

const Container = styled.div``;

const Form = styled.form`
    padding: 0px 40px;
`;

const ExtendedInput = styled(Input)`
    margin-bottom: 20px;
`;

const VerifyPhonePresenter = () => (
    <Container>
        <Helmet>
            <title>Verify Phone | Number</title>
        </Helmet>
        <Header backTo={routes.phoneLogin} title={"Verify Phone Number"} />
        <Form>
            <ExtendedInput
                value={""}
                placeholder={"인증 번호를 입력해주세요"}
                onChange={null}
            />
            <Button value={"Submit"} onClick={null} />
        </Form>
    </Container>
);

export default VerifyPhonePresenter;