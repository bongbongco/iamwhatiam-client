import 'ant-design-pro/dist/ant-design-pro.css';
import FooterToolbar from 'ant-design-pro/lib/FooterToolbar';
import { 
    Anchor,
    Avatar, 
    // Breadcrumb,
    BackTop,
    Button,
    Carousel,
    Comment,
    Divider,
    Form, 
    Icon,
    Input,
    Layout,
    List,
    Rate,
    Tooltip,
    // message,
  } from "antd";
import 'antd/dist/antd.css';
import moment from "moment";
import React from "react";
import {
    BrowserView
} from "react-device-detect";
import CustomHeader from '../../Components/CustomHeader';
// import routes from "../../routes";
// import styled from "../../typed-components";
const { Content, Footer, Sider } = Layout;
const { Link } = Anchor;
const TextArea = Input.TextArea;
/*
const Logo = styled.div`
    height: 32px;
    background: rgba(255,255,255,.2);
    margin: 16px;
`;


const ExtendsAnchor = styled(Anchor)`
    margin-left: 5px;
`;
*/

const CommentList = ({ comments }) => (
    <List
      dataSource={comments}
      header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
      itemLayout="horizontal"
      renderItem={props => <Comment {...props} />}
    />
  );

const Editor =({
    onChange,
    onSubmit,
    submitting,
    value
}) => (
    <div>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
            <Form.Item>
                <Button
                    htmlType="submit"
                    loading={submitting}
                    onClick={onSubmit}
                    type="primary"
                >
                    후기 쓰기
                </Button>
        </Form.Item>
    </div>
);

/*
const ExtendsDivider = styled(Divider)`
    margin-left: 5px;
    margin-right: 15px;
`;
*/
interface IProps {
    comments: any;
    handleChange: any;
    handleSubmit: any;
    submitting: boolean;
    value: string;
}
 
class GetCounselorPresenter extends React.Component<IProps> {
  
    public render() {
        const {
            comments,
            handleChange,
            handleSubmit,
            submitting,
            value
        } = this.props;
        
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Layout>
                    <CustomHeader 
                        title={"카운셀러 만나기"}
                        backTo={'/'}
                    />
                    <Content style={{ margin: '0 16px' }}>
                        <br />
                            <div style={{ 
                                background: '#fff', 
                                minHeight: 360,
                                padding: 24 }}
                            >
                                <BrowserView>
                                    <Carousel autoplay={true}>
                                        <div>
                                            <img src="https://res.cloudinary.com/df1z6ncoy/image/upload/v1551014067/11747_12203_3842.jpg" />
                                        </div>
                                        <div>
                                            <img src="https://res.cloudinary.com/df1z6ncoy/image/upload/v1551014367/20170830190157378000vspim.jpg" alt="thumnail" />
                                        </div>
                                        <div>
                                            <img src="https://res.cloudinary.com/df1z6ncoy/image/upload/v1551014482/%E1%84%83%E1%85%A9%E1%84%81%E1%85%A2%E1%84%87%E1%85%B5_%E1%84%80%E1%85%B5%E1%86%B7%E1%84%80%E1%85%A9%E1%84%8B%E1%85%B3%E1%86%AB.png" alt="thumnail" />
                                        </div>
                                    </Carousel>
                                </BrowserView>
                                <div id="components-anchor-summary">
                                    <Divider orientation="left">요약</Divider>
                                    <div style={{ display:"flex" }}>
                                        <div style={{minWidth:"150px"}}>
                                            <Avatar src="https://res.cloudinary.com/df1z6ncoy/image/upload/v1551015680/187241a.jpg" size={150} icon="user" />
                                        </div>
                                        <div style={{ 
                                            alignItems:"left",
                                            display:"flex", 
                                            flexDirection:"column",
                                            justifyContent:"center",
                                            marginLeft:"10px"
                                        }}>
                                            <span style={{ fontSize:"28px" }}>색채심리로 알아보는 내 마음! 저와 함께 자신을 공부하는 시간을 가져봐요</span>
                                            <Rate disabled={true} defaultValue={3} />
                                            <Divider />
                                            <div style={{ 
                                                display:"flex",
                                                justifyContent:"space-around",
                                            }}>
                                                <div style={{
                                                    alignItems:"center",
                                                    display:"flex", 
                                                    flexDirection:"column",
                                                    justifyContent:"center",
                                                }}>
                                                    <Icon type="environment" style={{ 
                                                        fontSize: '25px', 
                                                        marginBottom: '10px' 
                                                        }} 
                                                    />
                                                    <span>공덕</span>
                                                </div>
                                                <div style={{
                                                    alignItems:"center",
                                                    display:"flex", 
                                                    flexDirection:"column",
                                                    justifyContent:"center",
                                                }}>
                                                    <Icon type="clock-circle" style={{ 
                                                        fontSize: '25px',
                                                        marginBottom: '10px' 
                                                        }} 
                                                    />
                                                    <span>3시간/3회</span>
                                                </div>
                                                <div style={{
                                                    alignItems:"center",
                                                    display:"flex", 
                                                    flexDirection:"column",
                                                    justifyContent:"center",
                                                }}>
                                                    <Icon type="team" style={{ 
                                                        fontSize: '25px', 
                                                        marginBottom: '10px' 
                                                        }} 
                                                    />
                                                    <span>1 ~ 3인</span>
                                                </div>
                                                <div style={{
                                                    alignItems:"center",
                                                    display:"flex", 
                                                    flexDirection:"column",
                                                    justifyContent:"center",
                                                }}>
                                                    <Icon type="dollar" style={{ 
                                                        fontSize: '25px',
                                                        marginBottom: '10px' 
                                                        }} 
                                                     />
                                                    <span>3만원/시간</span>
                                                </div>
                                            </div>
                                            <Divider />
                                        </div>
                                    </div>
                                </div>
                                <div id="components-anchor-counselor">
                                    <Divider orientation="left">카운셀러</Divider>
                                    <span>카운셀러</span>
                                </div>
                                <div id="components-anchor-program">
                                    <Divider orientation="left">프로그램</Divider>
                                    <span>프로그램</span>
                                </div>
                                <div id="components-anchor-review">
                                    <Divider orientation="left">후기</Divider>
                                    <div>
                                        {comments.length > 0 && <CommentList comments={comments} />}
                                        <Comment
                                            author={<a>김고은</a>}
                                            avatar={(
                                                <Avatar
                                                    src="https://res.cloudinary.com/df1z6ncoy/image/upload/v1551015680/187241a.jpg"
                                                    alt="profile"
                                                />
                                            )}
                                            content={(
                                                <Editor
                                                    onChange={handleChange}
                                                    onSubmit={handleSubmit}
                                                    submitting={submitting}
                                                    value={value}
                                                />
                                            )}
                                        />
                                    </div>
                                    <Comment
                                        // actions={actions}
                                        author={<a>김고은</a>}
                                        avatar={(
                                            <Avatar
                                                src="https://res.cloudinary.com/df1z6ncoy/image/upload/v1551015680/187241a.jpg"
                                                alt="김고은"
                                            />
                                        )}
                                        content={(
                                            <p>가벼운 마음으로 갔다가 많은 걸 얻고 나왔습니다.
                                            두시간이 아깝지않고 친구들에게도 추천해줬어요
                                            리뷰 길게 쓸것 없이 무조건 상담받아보세요 자기자신에게 딱맞는 방향을 제시해주세요</p>
                                        )}
                                        datetime={(
                                            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                                                <span>{moment().fromNow()}</span>
                                            </Tooltip>
                                        )}
                                    />
                                </div>
                                <div id="components-anchor-question">
                                    <Divider orientation="left">실시간 문의</Divider>
                                    <span>실시간 문의</span>
                                </div>
                            </div>
                            <style>
                            {`
                                .ant-carousel .slick-slide {
                                    text-align: center;
                                    min-height: 180px;
                                    max-height: 450px;
                                    width: 100%
                                    line-height: normal;
                                    background: #fff;
                                    overflow: hidden;
                                }
                              
                                .ant-carousel .slick-slide h3 {
                                    color: #fff;
                                }
                                .ant-carousel .slick-slide img {
                                    width: 100%;
                                }

                                .ant-comment .content p {
                                    color: red;
                                } 
                            `}
                            </style>
                        <FooterToolbar extra="extra information">
                            <Button>Cancel</Button>
                            <Button type="primary">Submit</Button>
                        </FooterToolbar>
                    </Content>
                    <BackTop />
                    <Footer style={{ 
                        marginBottom: '45px',
                        textAlign: 'center',
                         }}>
                        Dandi ©2019 Created by ManDaGGo 
                    </Footer>
                </Layout>    
                <Sider
                    width={120}
                    style={{ 
                        background: '#fff',

                    }}
                >
                    <Anchor
                        affix={true}
                        offsetTop={65}
                        style={{
                            marginLeft: '5px',
                        }}
                    >
                        <Link href="#components-anchor-summary" title="요약" />
                        <Link href="#components-anchor-counselor" title="카운셀러" />
                        <Link href="#components-anchor-program" title="프로그램" />
                        <Link href="#components-anchor-review" title="후기" />
                        <Link href="#components-anchor-question" title="실시간 문의" />
                    </Anchor>
                </Sider>
                        <FooterToolbar 
                            extra="프로그램 신청"
                            style={{
                                width:'100%'
                            }}
                        >
                            <Button>문의하기</Button>
                            <Button type="primary">신청하기</Button>
                        </FooterToolbar>
            </Layout>    
        ); 
    }
}
  
export default GetCounselorPresenter;