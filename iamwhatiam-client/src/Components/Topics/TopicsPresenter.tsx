import React from "react";
import Helmet from "react-helmet";
import Topic from "../../Components/Topic";
import styled from "../../typed-components";
import { getTopics } from "../../types/api";

const Container = styled.div`
    padding: 0px 40px;
`;

interface IProps {
    data?: getTopics;
    loading: boolean;
}

const TopicsPresenter: React.SFC<IProps> = ({
    data: { GetMyTopics: { topics = null } = {} } = {},
    loading
}) => (
    <React.Fragment>
        <Helmet>
            <title>주제 목록 | iamWhatiam</title>
        </Helmet>
        <Container>
            {!loading &&
            topics &&
            topics.length === 0 && 
            "추가된 주제가 없습니다. "
            }
            {!loading &&
            topics &&
            topics.map(topic => (
                <Topic
                    key={topic!.id}
                    id={topic!.id}
                    fav={topic!.isFav}
                    subject={topic!.subject}
                    content={topic!.content}
                />
            ))} 
        </Container>
    </React.Fragment>
);

export default TopicsPresenter;