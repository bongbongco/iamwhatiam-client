import { gql } from "apollo-boost";

export const USER_PROFILE = gql`
    query userProfile {
        GetMyProfile {
            ok
            error
            user {
                profilePhoto
                firstName
                lastName
                email
                fullName
                isDriving
            }
        }
    }
`;

export const GET_PLACES = gql`
    query getPlaces {
        GetMyPlaces {
            ok
            error
            places {
                id
                name
                address
                isFav
            }
        }
    }
`;


export const GET_TOPICS = gql`
    query getTopics {
        GetMyTopics {
            ok
            error
            topics {
                id
                subject
                content
                isFav
            }
        }
    }
`;