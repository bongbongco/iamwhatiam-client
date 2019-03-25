import { 
    // Avatar, 
    // Breadcrumb,
    // AutoComplete,
    Button,
    // Cascader, 
    Checkbox,
    Col,
    // Comment, 
    Form,
    Icon,
    Input,
    // InputNumber,
    Layout,
    // message,
    Radio,
    // Rate,
    Row,
    // Select,
    // Slider,
    // Steps,
    // Switch,
    // Tooltip,
    Upload,
} from "antd";
import React from "react";
import CustomHeader from "../../Components/CustomHeader";
// import styled from "../../typed-components";
const { Content, Footer } = Layout;
// const SubMenu = Menu.SubMenu;
// const Step = Steps.Step;
// const { Option } = Select;
// const AutoCompleteOption = AutoComplete.Option;

/*
const Logo = styled.div`
    height: 32px;
    background: rgba(255,255,255,.2);
    margin: 16px;
`;
*/

interface IProps {
    form: any;
    handleSubmit: any;
    normFile: any;
}

class AddCounselorPresenter extends React.Component<IProps> {

    public render() {
        const {
            handleSubmit,
            normFile,
            form,
        } = this.props;
       
        const { getFieldDecorator } = form;

        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };

        return (
            <Layout className="layout">
                <CustomHeader 
                    title={"카운셀러 등록하기"}
                    backTo={'/'}
                />
                    <Content style={{ margin: '0 16px' }}>
                        <br />
                        <div style={{ 
                            background: '#fff', 
                            minHeight: 360,
                            padding: 24 }}
                        >
                            <Form onSubmit={handleSubmit}>
                                <Form.Item
                                  {...formItemLayout}
                                  label="이름"
                                >
                                    <span className="ant-form-text">이승용</span>
                                </Form.Item>
                                
                                <Form.Item {...formItemLayout} label="별명">
                                    {getFieldDecorator('nickname', {
                                        rules: [{
                                            message: '별명을 입려해주세요',
                                            required: true,
                                        }],
                                    })(
                                        <Input placeholder="별명을 입력해주세요" />
                                    )}
                                </Form.Item>
                                
                                <Form.Item
                                    {...formItemLayout}
                                    label="신분 인증"
                                >
                                    {getFieldDecorator('radio-group')(
                                        <Radio.Group>
                                            <Radio value="a">대학 인증</Radio>
                                            <Radio value="b">대학원 인증</Radio>
                                            <Radio value="c">신분증 인증</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>

                                <Form.Item
                                    {...formItemLayout}
                                    label="학력 인증"
                                >
                                    {getFieldDecorator('radio-button')(
                                        <Radio.Group>
                                            <Radio.Button value="a">재학</Radio.Button>
                                            <Radio.Button value="b">졸업</Radio.Button>
                                            <Radio.Button value="c">수료</Radio.Button>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                
                                <Form.Item
                                    {...formItemLayout}
                                    label="학력 인증"
                                    extra="학생증, 재학증명서, 졸업증명서"
                                >
                                    {getFieldDecorator('upload', {
                                        getValueFromEvent: normFile,
                                        valuePropName: 'fileList',
                                    })(
                                        <Upload name="logo" action="/upload.do" listType="picture">
                                            <Button>
                                                <Icon type="upload" /> 파일 업로드 
                                            </Button>
                                        </Upload>
                                    )}
                                </Form.Item>

                                <Form.Item
                                    {...formItemLayout}
                                    label="치료 방법"
                                >
                                    {getFieldDecorator("checkbox-group", {
                                        initialValue: ["counseling"],
                                    })(
                                        <Checkbox.Group style={{ width: "100%" }}>
                                            <Row>
                                                <Col span={8}><Checkbox disabled={true} value="counseling">심리상담</Checkbox></Col>
                                                <Col span={8}><Checkbox value="language">언어치료</Checkbox></Col>
                                                <Col span={8}><Checkbox value="Cognitive">인지치료</Checkbox></Col>
                                                <Col span={8}><Checkbox value="art">미술치료</Checkbox></Col>
                                                <Col span={8}><Checkbox value="color">색채치료</Checkbox></Col>
                                                <Col span={8}><Checkbox value="music">음악치료</Checkbox></Col>
                                                <Col span={8}><Checkbox value="sense">감각통합치료</Checkbox></Col>
                                                <Col span={8}><Checkbox value="play">놀이치료</Checkbox></Col>
                                            </Row>
                                        </Checkbox.Group>
                                    )}
                                </Form.Item>

                                <Form.Item
                                    {...formItemLayout}
                                    label="자격증"
                                >
                                    <div className="dropbox">
                                        {getFieldDecorator('dragger', {
                                            getValueFromEvent: normFile,
                                            valuePropName: 'fileList',
                                        })(
                                            <Upload.Dragger name="files" action="/upload.do">
                                                <p className="ant-upload-drag-icon">
                                                    <Icon type="inbox" />
                                                </p>
                                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                                            </Upload.Dragger>
                                        )}
                                    </div>
                                </Form.Item>

                                <Form.Item
                                    wrapperCol={{ span: 12, offset: 6 }}
                                >
                                    <Button type="primary" htmlType="submit">등록 완료</Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Dandi ©2019 Created by ManDaGGo 
                    </Footer>
                </Layout>
        ); 
    }
}

export default AddCounselorPresenter;
