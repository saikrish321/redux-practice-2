import { combineReducers } from "redux"

import User from "./user"

const reducers = combineReducers({
    user: User
})

export default reducers
