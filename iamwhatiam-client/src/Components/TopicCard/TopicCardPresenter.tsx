import { Avatar, Card, Icon } from "antd";
import React from "react";
import { MutationFn } from "react-apollo";
// import Link from "react-router-dom";
import { Link } from "react-router-dom";
// import Button from "../../Components/Button";
// import Form from "../../Components/Form";
// import Input from "../../Components/Input";
// import bgImage from "../../images/bg.png";
import routes from "../../routes";
// import styled from "../../typed-components";
// import TopicComments from '../TopicComments';
const { Meta } = Card;

/*
const Subject = styled.span`
    display: block;
    font-size: 24px;
`;

const Content = styled.span`
    color: ${props => props.theme.greyColor};
    font-size: 14px;
    font-weight: 400;
`;
*/
interface IProps {
    topicId: number;
    fav: boolean;
    subject: string;
    content: string;
    // comment: string;
    // loading: boolean;
    // onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onStarPress: MutationFn;
    // onSubmit: MutationFn;
}

const TopicCardPresenter: React.SFC<IProps> = ({ 
    topicId,
    onStarPress,
    fav, 
    // onInputChange,
    // onSubmit,
    // loading,
    subject, 
    content
    // comment
 }) => (
    <div style={{ marginBottom: "25px" }}>
            <Link 
                to={`${routes.getTopic}?topicId=${topicId}`}
            >
            <a>
                <Card
                    hoverable={true}
                    actions={[
                        <Icon type="eye" key={topicId} theme="outlined" />
                    ]}
                    cover={
                        <img
                            alt="example"
                            src={
                                "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            }
                        />
                    }
                >
                    <Meta
                        avatar={<Avatar src=
                            "https://avatars1.githubusercontent.com/u/3170006?s=400"
                        />}
                        title={subject}
                        description={content}
                    />
                </Card>
            </a>
            </Link>
        </div>
);

export default TopicCardPresenter;