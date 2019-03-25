import { 
  Avatar, 
  Breadcrumb, 
  Comment, 
  Icon, 
  Layout, 
  Menu 
} from "antd";
import "draft-js/dist/Draft.css";
import React from "react";
import 'react-mde/lib/styles/css/react-mde-all.css';
// import Helmet from "react-helmet";
import styled from "../../typed-components";
import { getTopic } from "../../types/api";
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

const Logo = styled.div`
    height: 32px;
    background: rgba(255,255,255,.2);
    margin: 16px;
`;

const Title = styled.div`
  margin-top: 24px;
  margin-bottom: 16px;
  font-weight: 600;
  line-height: 1.25;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.3em;
`;

const Title1 = styled(Title)`
  font-size: 1.6em;
`;

const Title2 = styled(Title)`
  font-size: 1.4em;
`;

const Title3 = styled(Title)`
  font-size: 1.2em;
`;

const Base = styled.div`
  margin-top: 0;
  margin-bottom: 16px;
`;

const Blockquote = styled(Base)`
  margin-left: 0;
  padding: 0 1em;
  color: #777;
  border-left: 0.25em solid #ddd;
  & > :first-child {
    margin-top: 0;
  }
  & > :last-child {
    margin-bottom: 0;
`;

const UL = styled.ul`
  margin-top: 0;
  margin-bottom: 16px;
  padding-left: 2em;
`;

const OL = styled.ol`
  margin-top: 0;
  margin-bottom: 16px;
  padding-left: 2em;
`;



interface IProps {
    collapsed: boolean;
    data?: getTopic;
    loading: boolean;
    onCollapse: (collapsed: boolean) => void;
}

const GetTopicPresenter: React.SFC<IProps> = ({
    collapsed,
    data: { GetTopic: {topic = null } = {} } = {},
    loading,
    onCollapse
}) => (
    <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible={true}
          collapsed={collapsed}
          onCollapse={onCollapse}
          style={{ background: '#fff' }}
        >
          <Logo />
          <Menu 
            defaultSelectedKeys={['1']} 
            mode="inline"
            theme="light"
          >
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>차트</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="read" />
              <span>참고 자료</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>참가자</span></span>}
            >
              <Menu.Item key="3">이승용</Menu.Item>
              <Menu.Item key="4">이민지</Menu.Item>
              <Menu.Item key="5">이시은</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
        <Header 
          className="header"
          style={{ background: '#fff' }}
        >
          <div className="logo" />
          <Menu
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
            theme="light"
          >
           <Menu.Item key="1">nav 1</Menu.Item>
           <Menu.Item key="2">nav 2</Menu.Item>
           <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
          { !loading &&
            topic &&
                <Content style={{ margin: '0 16px' }}>
                  <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>스타트업</Breadcrumb.Item>
                    <Breadcrumb.Item>좋은 조직 문화란 무엇일까요?</Breadcrumb.Item>
                  </Breadcrumb>
                  <div style={{ 
                    background: '#fff', 
                    minHeight: 360,
                    padding: 24 }}
                  >
                    <Title1>Hello world</Title1>
                    <Title2>Hello world</Title2>
                    <Title3>Hello world</Title3>
                    <Blockquote>Test</Blockquote>
                    <UL>TEST</UL>
                    <UL>TEST</UL>
                    <UL>TEST</UL>
                    <UL>TEST</UL>
                    <OL>TEST</OL>
                    <OL>TEST</OL>
                    <OL>TEST</OL>
                    <OL>TEST</OL>
                    <OL>TEST</OL>
                    {topic.content}
                    <Comment
                      actions={[<span key="1">Reply to</span>]}
                      author={<a>Han Solo</a>}
                      avatar={(
                        <Avatar
                          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                          alt="Han Solo"
                        />
                      )}
                      content={<p>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure).</p>}
                    />
                  </div>

                  <style>{`
                    .mde-preview {
                       .mde-preview-content {
                         padding: $mde-preview-padding;

                         p, blockquote, ul, ol, dl, table, pre {
                           margin-top: 0;
                           margin-bottom: 16px;
                         }

                         h1, h2, h3 {
                           margin-top: 24px;
                           margin-bottom: 16px;
                           font-weight: 600;
                           line-height: 1.25;
                           border-bottom: 1px solid #eee;
                           padding-bottom: 0.3em;
                         }
                         h1 {
                           font-size: 1.6em;
                         }
                         h2 {
                           font-size: 1.4em;
                         }
                         h3 {
                           font-size: 1.2em;
                         }
                         ul, ol {
                           padding-left: 2em;
                         }
                         blockquote {
                           margin-left: 0;
                           padding: 0 1em;
                           color: #777;
                           border-left: 0.25em solid #ddd;
                           & > :first-child {
                             margin-top: 0;
                           }
                           & > :last-child {
                             margin-bottom: 0;
                           }
                         }

                         code {
                           padding: 0.2em 0 0.2em 0;
                           margin: 0;
                           font-size: 90%;
                           background-color: rgba(0, 0, 0, 0.04);
                           border-radius: 3px;
                           &::before, &::after {
                             letter-spacing: -0.2em;
                             content: "\00a0";
                           }
                         }

                         pre {
                           padding: 16px;
                           overflow: auto;
                           font-size: 85%;
                           line-height: 1.45;
                           background-color: #f7f7f7;
                           border-radius: 3px;

                           code {
                             display: inline;
                             padding: 0;
                             margin: 0;
                             overflow: visible;
                             line-height: inherit;
                             word-wrap: normal;
                             background-color: transparent;
                             border: 0;
                             &::before, &::after {
                               content: none;
                             }
                           }

                           > code {
                             padding: 0;
                             margin: 0;
                             font-size: 100%;
                             word-break: normal;
                             white-space: pre;
                             background: transparent;
                             border: 0;
                           }
                         }

                         a {
                           color: #4078c0;
                           text-decoration: none;
                           &:hover {
                             text-decoration: underline;
                           }
                         }
                         & > *:first-child {
                           margin-top: 0 !important;
                         }
                         & > *:last-child {
                           margin-bottom: 0 !important;
                         }
                         &::after {
                           display: table;
                           clear: both;
                           content: "";
                         }

                         table {
                           display: block;
                           width: 100%;
                           border-spacing: 0;
                           border-collapse: collapse;
                           thead {
                             th {
                               font-weight: bold;
                             }
                           }
                           th, td {
                             padding: 6px 13px;
                             border: 1px solid $mde-border-color;
                           }
                         }
                       }
                     }
                     `}
                  </style>
                </Content>
          }
          <Footer style={{ textAlign: 'center' }}>
            iamWhatiam ©2019 Created by ManDaGGo 
          </Footer>
        </Layout>
    </Layout>    
);

export default GetTopicPresenter;