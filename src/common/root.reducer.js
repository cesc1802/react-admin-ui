import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import history from "./history";
// import headerReducer from "../features/header/redux/reducer";
// import navbarReducer from "../features/navbar/redux/reducer";
// import authReducer from "../features/login/redux/reducer";

const reducerMap = {
    router: connectRouter(history),
    // header: headerReducer,
    // navbar: navbarReducer,
    // auth: authReducer
    // auth: authenticationReducer,
    // role: roleReducer,
    // permission: permissionReducer,
    // grant: grantReducer,
    // action: actionReducer,
    // resource: resourceReducer,
    // user: userReducer
};

export default combineReducers(reducerMap);
