import {IAction} from "../../model/IAction";

export const Actions = {
    ADD_USER: 'ADD_USER',
    REMOVE_USER: 'REMOVE_USER'
}

export const addUser = (user: string): IAction<string> => ({
    type: Actions.ADD_USER,
    payload: user
})

export const removeUser = (user: string): IAction<string> => ({
    type: Actions.REMOVE_USER,
    payload: user
})
