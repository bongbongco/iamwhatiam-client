import React from "react";
import { Mutation } from "react-apollo";
import { toast } from 'react-toastify';
import { GET_TOPICS } from "../../sharedQueries";
import { editTopic, editTopicVariables, getTopics } from "../../types/api";
import TopicCardPresenter from "./TopicCardPresenter";
import { EDIT_TOPIC } from "./TopicQueries";

interface IProps {
    fav: boolean;
    subject: string;
    content: string;
    key: number;
    id: number;
}
/*
interface IState {
    comment: string;
}
*/
class EditTopicMutation extends Mutation<editTopic, editTopicVariables> {}

class TopicCardContainer extends React.Component<IProps> {
    public state = {
        comment: ""
    };
    public render() {
        const { id, fav, subject, content } = this.props;
        return  (
            <EditTopicMutation
                mutation={EDIT_TOPIC}
                variables={{
                    content,
                    isFav: !fav,
                    subject,
                    topicId: id,
                }}
                update={(cache, {data}) => {
                    if (data) {
                        const { EditTopic } = data;
                        if (EditTopic.ok) {
                            toast.success("설정이 변경되었습니다");
                        } else if (EditTopic.error) {
                            toast.error(EditTopic.error);
                            return;
                        }
                    }
                    const query: getTopics | null = cache.readQuery({
                        query: GET_TOPICS
                    });
                    cache.writeQuery({ query: GET_TOPICS, data: query });
                }} 
                refetchQueries={[{ query: GET_TOPICS }]}
            >
                {editTopicFn => (
                    <TopicCardPresenter
                        topicId={id}
                        onStarPress={editTopicFn}
                        fav={fav}
                        subject={subject}
                        content={content}
                    />
                )}
            </EditTopicMutation>
        );
    }
}

export default TopicCardContainer;