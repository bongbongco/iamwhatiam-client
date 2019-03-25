import { gql } from "apollo-boost";

export const GET_TOPIC = gql`
query getTopic($topicId: Int!) {
    GetTopic(topicId: $topicId) {
        ok
        error
        topic {
            id
            subject
            content
            isFav
        }
    }
}
`;