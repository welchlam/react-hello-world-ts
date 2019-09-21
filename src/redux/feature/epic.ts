import { Actions as FeatureActions } from './actions';
import {addUser, removeUser} from "../user/actions";
import { map } from 'rxjs/operators';
import { ofType, ActionsObservable } from "redux-observable";
import {IAction} from "../../model/IAction";

export const addFeatureEpic = (action$: ActionsObservable<IAction<number>>) => action$.pipe(
    ofType(FeatureActions.ADD_FEATURE),
    map(action => {
        const {payload: id} = action;
        return addUser('user ' + id);
    })
);

export const removeFeatureEpic = (action$: ActionsObservable<IAction<number>>) => action$.pipe(
    ofType(FeatureActions.REMOVE_FEATURE),
    map(action => {
        const {payload: id} = action;
        return removeUser('user ' + id);
    })
)
