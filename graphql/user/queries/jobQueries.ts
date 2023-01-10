import { gql } from "@apollo/client";

export const ALL_OPEN_JOBS = gql`
    query get_jobs {
        jobs {
            id
            description
            fixedRate
            rateMax
            rateMin
            title
        }
    }
`;