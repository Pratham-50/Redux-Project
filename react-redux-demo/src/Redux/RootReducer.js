import { combineReducers } from "redux";
import CakeReducer from "./Cakes/CakeReducer";
import IcecreamReducer from "./Icecreams/IcecreamReducer";

const RootReducer = combineReducers({
    cake: CakeReducer,
    icecream: IcecreamReducer
}) 

export default RootReducer