import { Actions } from "./actions";

const initialState = [{
    id: 1,
    name: 'feature 1',
    detail: 'feature 1 detail',
    active: true,
    user: 'user 1'
}, {
    id: 2,
    name: 'feature 2',
    detail: 'feature 2 detail',
    active: true,
    user: 'user 2'
}, {
    id: 3,
    name: 'feature 3',
    detail: 'feature 3 detail',
    active: true,
    user: 'user 3'
}, {
    id: 4,
    name: 'feature 4',
    detail: 'feature 4 detail',
    active: true,
    user: 'user 4'
}];

export default function(state = initialState, action) {
    switch (action.type) {
        case Actions.ADD_FEATURE: {
            const {id} = action.payload;
            const newFeature = {
                id,
                name: 'feature ' + id,
                detail: 'feature ' + id + ' detail',
                active: true,
                user: 'user ' + id
            }
            return [...state, newFeature];
        }
        case Actions.REMOVE_FEATURE: {
            const {id} = action.payload;
            return [...state].filter(item => item.id !== id);
        }
        default:
            return state;
    }
}
