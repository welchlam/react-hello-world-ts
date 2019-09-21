import { Actions } from "./actions";

const initialState = ['user 1', 'user 2', 'user 3', 'user 4'];

export default function (state = initialState, action) {
    // const { type, payload: {user}} = action;
    switch (action.type) {
        case Actions.ADD_USER: {
            return [...state, action.payload.user];
        }
        case Actions.REMOVE_USER: {
            return [...state].filter(user => user !== action.payload.user);
        }
        default:
            return state;
    }
}