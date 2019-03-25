import React from "react";
import Helmet from "react-helmet";
import { Link, RouteComponentProps } from "react-router-dom";
import bgImage from "../../images/bg.png";
import routes from "../../routes";
import styled from "../../typed-components";

const Container = styled.div`
    height: 100vh
`;

const Header = styled.header`
    height: 70%;
    background: linear-gradient(rgba(0, 153, 196, 0.5), rgba(0, 153, 196, 0.4)), url(${bgImage});
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.div`
    width: 110px;
    height: 110px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 -14px 28px rgba(0, 0, 0, 0.22);
    font-weight: 500;
    font-size: 25px;
`;

const Title = styled.h1``;

const Footer = styled.div``;

const Subtitle = styled.h2`
    font-size: 30px;
`;

const FakeInput = styled.div`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 300;
`;

const PhoneLogin = styled.div`
    padding: 20px;
    cursor: pointer;
`;

const Grey = styled.span`
    color: ${props => props.theme.greyColor};
    margin-left: 10px;
`;

const SocialLogin = styled.div`
    border-top: 1px solid ${props => props.theme.greyColor};
    padding: 30px 20px;
`;

const SocialLink = styled.span`
    color: ${props => props.theme.blueColor};
    font-size: 20px;
    cursor: pointer;
`;


interface IProps extends RouteComponentProps<any> {
}

const LoginPresenter: React.SFC<IProps> = () => (
    <Container>
        <Helmet>
            <title>로그인 | iamWhatiam</title>
        </Helmet>
        <Header>
            <Logo>
                <Title>iWi</Title>
            </Logo>
        </Header>
        <Footer>
            <Link to={routes.phoneLogin}>
                <PhoneLogin>
                    <Subtitle>내 생각을 나 답게 = iWi</Subtitle>
                    <FakeInput>
                         🇰🇷 +82 <Grey>휴대전화 번호를 입력해주세요</Grey>
                    </FakeInput>
                </PhoneLogin>
            </Link>
            <Link to={routes.socialLogin}>
                <SocialLogin>
                    <SocialLink>SNS 계정 활용해서 로그인하기</SocialLink> 
                </SocialLogin>
            </Link>
        </Footer>
    </Container>
    );

export default LoginPresenter;