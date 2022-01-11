const UPDATE_GROCERY = 'UPDATE_GROCERY';

export const updateGrocery = (grocery) => {
    return {
        type: UPDATE_GROCERY,
        grocery,
    }
}

const defaultGrocery = [];

export const grocery = (state=defaultGrocery, action) => {
    switch (action.type) {
        case UPDATE_GROCERY:
            return [action.grocery];
        default:
            return state;
    }
}