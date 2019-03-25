import { 
  // Avatar, 
  // Breadcrumb,
  Button,
  // Comment, 
  Icon,
  Layout,
  Menu,
  message,
  Steps
} from "antd";
import React from "react";
import CanvasDraw from "react-canvas-draw";
import ReactQuill from "react-quill";
import styled from "../../typed-components";
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const Step = Steps.Step;

const Logo = styled.div`
    height: 32px;
    background: rgba(255,255,255,.2);
    margin: 16px;
`;
interface IProps {
    collapsed: boolean;
    current: number;
    onCollapse: (collapsed: boolean) => void;
    handleChange: any;
    prev: any;
    next: any;
    text: string;
}

class AddCounselingPresenter extends React.Component<IProps> {

    public render() {
        const {
            collapsed,
            current,
            onCollapse,
            handleChange,
            prev,
            next,
            text,
        } = this.props;
        
        const steps = [{
            content: '진행할 치료 설명 및 상담 서약서',
            title: '안내',
          }, {
            content:
                <CanvasDraw />
            ,
            title: '마음 표현하기',
          }, {
            content: 
                <ReactQuill
                    value={text}
                    onChange={handleChange}
                />,
            title: '마음 정리하기',
          }];

        return (
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
                     <Menu.Item key="1">Dandi</Menu.Item>
                     <Menu.Item key="2">Counseling</Menu.Item>
                     <Menu.Item key="3">My Page</Menu.Item>
                    </Menu>
                </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <br />
                        <div style={{ 
                            background: '#fff', 
                            minHeight: 360,
                            padding: 24 }}
                        >
                            <Steps current={current}>
                                {steps.map(item => <Step key={item.title} title={item.title} />)}
                            </Steps>
                            <br />
                            <div className="steps-content">{steps[current].content}</div>
                        </div>
                    </Content>
                    <div className="steps-action">
                      {
                        current < steps.length - 1
                        && <Button type="primary" onClick={() => next()}>다음</Button>
                      }
                      {
                        current === steps.length - 1
                        && <Button type="primary" onClick={() => message.success('Processing complete!')}>완료</Button>
                      }
                      {
                        current > 0
                        && (
                        <Button style={{ marginLeft: 8 }} onClick={() => prev()}>
                         이전
                        </Button>
                        )
                      }
                    </div>
                    <Footer style={{ textAlign: 'center' }}>
                        Dandi ©2019 Created by ManDaGGo 
                    </Footer>
                </Layout>
            </Layout>    
        ); 
    }
}

export default AddCounselingPresenter;
