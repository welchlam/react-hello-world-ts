import {IAction} from "../../model/IAction";

export const Actions = {
    ADD_FEATURE: 'ADD_FEATURE',
    REMOVE_FEATURE: 'REMOVE_FEATURE'
};

export const addFeature = (id: number): IAction<number> => ({
    type: Actions.ADD_FEATURE,
    payload: id
})

export const removeFeature = function (id: number): IAction<number> {
    return {
        type: Actions.REMOVE_FEATURE,
        payload: id
    }
}
