import { gql } from "@apollo/client";

// To do: add arguments, create lazy query
export const GET_USER = gql`{
    users {
        user_id
        email
        first_name
        last_name
        input_date
        last_updated
    }
}
`;

export const ADD_USER = gql`
    mutation ($user: AddUser!) {
        addUser(user: $user)
    }
`;
