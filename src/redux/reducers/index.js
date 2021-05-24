import {combineReducers} from "redux"
import {addfavReducer,removefavReducer} from "./reducer"

const reducers = combineReducers({
    addfavReducer,
    removefavReducer
})

export default reducers