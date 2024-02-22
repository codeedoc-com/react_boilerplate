import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
