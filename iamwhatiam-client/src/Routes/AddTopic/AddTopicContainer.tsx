import React from "react";
import { Mutation } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { toast } from 'react-toastify';
import routes from "../../routes";
import { GET_TOPICS } from "../../sharedQueries";
import { 
    addTopic,
    addTopicVariables, 
    // editTopic, 
    // editTopicVariables 
} from "../../types/api";
import AddTopicPresenter from "./AddTopicPresenter";
// import { EDIT_TOPIC } from "./TopicCardEditorQueries";
import { ADD_TOPIC } from "./AddTopicQueries";

interface IState {
    subject: string;
    content: string;
}

interface IProps extends RouteComponentProps<any> {}

class AddTopicQuery extends Mutation<addTopic, addTopicVariables> {}

class AddTopicContainer extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            content: "",
            subject: "",
        };
    }
    public render() {
        const { subject, content } = this.state;
        const { history } = this.props;
        return  (
            <AddTopicQuery
                mutation={ADD_TOPIC}
                onCompleted={data => {
                    const { AddTopic } = data;
                    if (AddTopic.ok) {
                        toast.success("등록되었습니다 😄");
                        setTimeout(() => {
                            history.push(routes.home);
                        }, 2000);
                    } else {
                        toast.error(AddTopic.error);
                    }
                }}
                refetchQueries={[{ query: GET_TOPICS }]}
                variables={{
                    content,
                    isFav: false,
                    subject
                }}
            >
                {(addTopicFn, { loading }) => (
                    <AddTopicPresenter
                        onInputChange={this.onInputChange}
                        subject={subject}
                        content={content}
                        loading={loading}
                        onSubmit={addTopicFn}
                    />
                )}
            </AddTopicQuery>
        );
    }
    public onInputChange: React.ChangeEventHandler<
        HTMLInputElement
    > = async event => {
        const {
            target: { name, value }
        } = event;
        this.setState({
            [name]: value
        } as any);
    };
}

export default AddTopicContainer;