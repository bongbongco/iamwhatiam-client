import { gql } from "apollo-boost";

export const EDIT_TOPIC = gql`
    mutation editTopic($topicId: Int!, $isFav: Boolean, $subject: String, $content: String) {
        EditTopic(topicId: $topicId, isFav: $isFav, subject: $subject, content: $content) {
            ok
            error
        }
    }
`;