import { Layout } from "antd";
import React from "react";
import Helmet from "react-helmet";
import { getTopics } from "../../types/api";
import TopicCard from "../TopicCard";
// import styled from "../../typed-components";
const { Content } = Layout;

interface IProps {
    data?: getTopics;
    loading: boolean;
}

const TopicCardsPresenter: React.SFC<IProps> = ({
    data: { GetMyTopics: { topics = null } = {} } = {},
    loading
}) => (
    <React.Fragment>
        <Helmet>
            <title>주제 목록 | iamWhatiam</title>
        </Helmet>
        <Content style={{ padding: "0 2px" }}>
            <div style={{ marginTop: "50px" }}>
                <div
                    style={{
                        display: "grid",
                        gridGap: "10px",
                        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                        width: "100%"
                    }}
                >
                    {!loading &&
                    topics &&
                    topics.length === 0 && 
                    "추가된 주제가 없습니다. "
                    }
                    {!loading &&
                    topics &&
                    topics.map(topic => (
                        <TopicCard
                            key={topic!.id}
                            id={topic!.id}
                            fav={topic!.isFav}
                            subject={topic!.subject}
                            content={topic!.content}
                        />
                    ))} 
                </div>
            </div>
        </Content>
    </React.Fragment>
);

export default TopicCardsPresenter;