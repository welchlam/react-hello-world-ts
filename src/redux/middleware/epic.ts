import {combineEpics, createEpicMiddleware} from "redux-observable";
import {addFeatureEpic} from "../feature/epic";

const rootEpic = combineEpics(
    addFeatureEpic
);

const epicMiddleware = createEpicMiddleware();
epicMiddleware.run(rootEpic);

export default epicMiddleware;
