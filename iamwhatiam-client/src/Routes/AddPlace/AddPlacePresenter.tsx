import React from "react";
import { MutationFn } from "react-apollo";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import CustomHeader from "../../Components/CustomHeader";
import Form from "../../Components/Form";
import Input from "../../Components/Input";
import routes from '../../routes';
import styled from "../../typed-components";

const Container = styled.div`
    padding: 0 40px;
`;

const ExtendedInput = styled(Input)`
    margin-bottom: 40px;
`;

const ExtendedLink = styled(Link)`
    text-decoration: underline;
    margin-bottom: 20px;
    display: block;
`;

interface IProps {
    address: string;
    name: string;
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    loading: boolean;
    onSubmit: MutationFn;
    pickedAddress: boolean;
}
const AddPlacePresenter: React.SFC<IProps> = ({
    onInputChange,
    address,
    name,
    loading,
    onSubmit,
    pickedAddress
}) => (
    <React.Fragment>
        <Helmet>
            <title>장소 추가하기 | iamWhatiam</title>
        </Helmet>
        <CustomHeader title={"장소 추가하기"} backTo={"/"} />
        <Container>
            <Form submitFn={onSubmit}>
                <ExtendedInput
                    placeholder={"이름"} 
                    type={"text"}
                    onChange={onInputChange}
                    value={name}
                    name={"name"}
                />
                <ExtendedInput
                    placeholder={"주소"} 
                    type={"text"}
                    onChange={onInputChange}
                    value={address}
                    name={"address"}
                />
                <ExtendedLink to={routes.findAddress}>지도에서 찾기</ExtendedLink>
                    <Button 
                        onClick={null} 
                        value={loading ? "위치 추가 중" : "추가하기"} 
                    />
            </Form>
        </Container>
    </React.Fragment>
);

export default AddPlacePresenter;