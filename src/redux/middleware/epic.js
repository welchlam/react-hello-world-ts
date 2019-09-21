import {combineEpics, createEpicMiddleware} from "redux-observable";
import {addUserEpic} from "../feature/epic";

const rootEpic = combineEpics(
    addUserEpic
);

const epicMiddleware = createEpicMiddleware();
epicMiddleware.run(rootEpic);
export default epicMiddleware;