import {
    BackTop,
    Carousel, 
    Icon,
    Layout, 
} from "antd";
import "node_modules/video-react/dist/video-react.css";
import React from "react";
import {
    BrowserView
} from "react-device-detect";
import { Link } from "react-router-dom";
import { Player } from "video-react";
import CustomHeader from "../../Components/CustomHeader";
import TopicCards from "../../Components/TopicCards";
import routes from "../../routes";
import styled from "../../typed-components";
import { 
    getTopics,
} from "../../types/api";

const { Content, Footer } = Layout;

const SLink = styled(Link)`
    appearance: none;
    margin: 0 20px;
    cursor: pointer;
    z-index: 2;
`;

const FakeInput = styled.div`
    width: 100%;
    border: 1px solid #e6e6e6;
    background-color: white;
    border-radius: 3px;
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 300;
    padding: 15px;
    &:hover{
        outline: none;
        background-color: white; 
        box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1), 0 8px 15px rgba(0, 0, 0, 0.07);
        transition-duration: 0.7s;
    }
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
    <Layout className="layout">
    <CustomHeader 
        title={'메인 페이지'}
        backTo={'/'}
    />
    <Content style={{ padding: '0 50px' }}>
        <br />
        <BrowserView>
            <Carousel autoplay={true}>
                <div>
                    <a href={routes.addCounseling}>
                        <img src="https://res.cloudinary.com/df1z6ncoy/image/upload/v1550879129/46357946374_abc84d29bf_o.jpg" />
                    </a>
                </div>
                <div>
                    <a href={routes.addCounseling}>
                        <img src="https://res.cloudinary.com/df1z6ncoy/image/upload/v1550877398/%E1%84%85%E1%85%A1%E1%84%87%E1%85%B5%E1%84%8B%E1%85%A1%E1%86%BC%E1%84%85%E1%85%A9%E1%84%8C%E1%85%B3.jpg"  alt="thumnail" />
                    </a>
                </div>
                <div>
                    <a href={routes.addCounseling}>
                        <img src="https://res.cloudinary.com/df1z6ncoy/image/upload/v1550879798/20190102003310239160_0_600_400.jpg" alt="thumnail" />
                    </a>
                </div>
                <div>
                    <a href={routes.addCounseling}>
                        <img src="https://res.cloudinary.com/df1z6ncoy/image/upload/v1550879799/HjRFhsTkfyNhgxrDAzpx37_640.jpg" alt="thumnail" />
                    </a>
                </div>
            </Carousel>
        </BrowserView>
            <Player
                playsInline={true}
                poster="https://res.cloudinary.com/df1z6ncoy/image/upload/v1550877398/%E1%84%85%E1%85%A1%E1%84%87%E1%85%B5%E1%84%8B%E1%85%A1%E1%86%BC%E1%84%85%E1%85%A9%E1%84%8C%E1%85%B3.jpg"
                src="https://res.cloudinary.com/df1z6ncoy/video/upload/v1550877011/IZ_ONE_%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%B3%E1%84%8B%E1%85%AF%E1%86%AB_-_%E1%84%85%E1%85%A1%E1%84%87%E1%85%B5%E1%84%8B%E1%85%A1%E1%86%BC%E1%84%85%E1%85%A9%E1%84%8C%E1%85%B3_La_Vie_en_Rose_MV.mp4"
            />
        <SLink to={routes.addCounseling}>
            <FakeInput>
                <Icon 
                    type="edit"
                    style={{ fontSize: '20px' }}
                    theme="outlined" 
                />
                <Grey>
                    {"마음 알아보기"}
                </Grey>
            </FakeInput>
        </SLink>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                  <TopicCards />
        </div>
        <style>
            {`
            .ant-carousel .slick-slide {
                text-align: center;
                min-height: 180px;
                width: 100%
                line-height: normal;
                max-height: 450px;
                background: #364d79;
                overflow: hidden;
            }

            .ant-carousel .slick-slide h3 {
                color: #fff;
            }
            .ant-carousel .slick-slide img {
                width: 100%;
            }
            `}
        </style>
        <Carousel autoplay={true}>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
        </Carousel>
    </Content>
    <div>
    <BackTop />
  </div>
    <Footer style={{ textAlign: 'center' }}>
      Dandi ©2019 Created by ManDaGGo 
    </Footer>
  </Layout>
);

export default HomePresenter;