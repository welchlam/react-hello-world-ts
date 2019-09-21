import { createStore, applyMiddleware, compose } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import rootReducer from "./reducer";
import { logger } from "./middleware/logger";
import { addFeatureEpic, removeFeatureEpic } from "./feature/epic";

const rootEpic = combineEpics(
    addFeatureEpic,
    removeFeatureEpic
);

const epicMiddleware = createEpicMiddleware();

const store= createStore(
    rootReducer,
    compose(applyMiddleware(epicMiddleware, logger))
);

epicMiddleware.run(rootEpic);

export default store;