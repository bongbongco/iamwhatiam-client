import React from "react";
import { MutationFn } from 'react-apollo';
import Helmet from "react-helmet";
import Button from "../../Components/Button";
import CustomHeader from "../../Components/CustomHeader";
import Form from "../../Components/Form";
import Input from "../../Components/Input";
import routes from "../../routes";
import styled from "../../typed-components";

const Container = styled.div``;

const ExtendedForm = styled(Form)`
    padding: 0px 40px;
`;

const ExtendedInput = styled(Input)`
    margin-bottom: 20px;
`;

interface IProps {
    verificationKey: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: MutationFn;
    loading: boolean;
}

const VerifyPhonePresenter: React.SFC<IProps> = ({ 
    verificationKey, 
    onChange,
    onSubmit,
    loading
}) => (
    <Container>
        <Helmet>
            <title>휴대전화 번호 인증 | iamWhatiam</title>
        </Helmet>
        <CustomHeader backTo={routes.phoneLogin} title={"Verify Phone Number"} />
        <ExtendedForm
            submitFn={onSubmit}
        >
            <ExtendedInput
                value={verificationKey}
                placeholder={"인증 번호를 입력해주세요"}
                onChange={onChange}
                name={"verificationKey"}
            />
            <Button 
                disabled={loading} 
                value={loading ? "인증 중" : "인증하기"} 
                onClick={null} 
            />
        </ExtendedForm>
    </Container>
);

export default VerifyPhonePresenter;