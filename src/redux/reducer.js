import { combineReducers } from "redux";
import features from "./feature/reducer";
import users from './user/reducer';

export default combineReducers({ features, users});
