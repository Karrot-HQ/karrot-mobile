import { gql } from "@apollo/client";

// To do: add arguments, create lazy query
export const GET_GROCERY = gql`{
    groceries {
        item_id
        item_name
        user_id
        delete_tag
        bought_tag
        input_date
        last_updated
    }
}
`;

export const ADD_GROCERY = gql`
    mutation ($grocery: AddGrocery!) {
        addGrocery(grocery: $grocery)
    }
`;

export const EDIT_GROCERY = gql`
    mutation ($grocery: EditGrocery!) {
        editGrocery(grocery: $grocery)
    }
`;

