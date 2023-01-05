import { gql } from "@apollo/client";

export const SIGN_UP = gql`
    mutation SignUp($signUpUserInput: SignupUserInput!) {
        signUp(signUpUserInput: $signUpUserInput) {
            accessToken
            refreshToken
            user {
                username
                refreshToken
            }
        }
    }
`;

export const SIGN_IN = gql`
    mutation SignIn($signInUserInput: SignInUserInput!) {
        signIn(signInUserInput: $signInUserInput) {
            refreshToken
            accessToken
        }
    }
`;