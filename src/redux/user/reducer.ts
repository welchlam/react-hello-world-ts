import { Actions } from "./actions";
import {IAction} from "../../model/IAction";

const initialState: string[] = ['user 1', 'user 2', 'user 3', 'user 4'];

export default function (state: string[] = initialState, action: IAction<string>): string[] {
    const { type, payload: user} = action;
    switch (type) {
        case Actions.ADD_USER: {
            // @ts-ignore
            return [...state, user];
        }
        case Actions.REMOVE_USER: {
            return [...state].filter(it => it !== user);
        }
        default:
            return state;
    }
}