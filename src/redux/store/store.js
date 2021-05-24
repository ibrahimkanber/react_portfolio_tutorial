import {createStore} from "redux"
import {addfavReducer} from "../reducers/reducer";

export const store=createStore(addfavReducer)