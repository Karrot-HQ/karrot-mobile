import { gql } from "@apollo/client";

// To do: add arguments, create lazy query
export const GET_INVENTORY = gql`{
    inventories {
        item_id
        item_name
        user_id
        expiry_id
        grocery_id
        delete_tag
        expiry_tag
        usage_tag
        input_date
        expiry_date
        last_updated
    }
}
`;

export const ADD_INVENTORY = gql`
    mutation ($inventory: AddInventory!) {
        addInventory(inventory: $inventory)
    }
`;

export const EDIT_INVENTORY = gql`
    mutation ($inventory: EditInventory!) {
        editInventory(inventory: $inventory)
    }
`;

