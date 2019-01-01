import authReducer from "./authReducer"
import postsReducer from "./postsReducer"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    auth: authReducer,
    post: postsReducer
})

export default rootReducer