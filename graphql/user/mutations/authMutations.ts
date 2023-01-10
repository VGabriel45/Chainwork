import { gql } from "@apollo/client";

export const REFRESH_TOKENS = gql`
    mutation Mutation($refreshInput: RefreshInput!) {
        refreshToken(refreshInput: $refreshInput) {
            refreshToken
            accessToken
        }
    }
`;

export const LOGOUT = gql`
    mutation Logout($userId: Int!) {
        logout(userId: $userId)
    }
`