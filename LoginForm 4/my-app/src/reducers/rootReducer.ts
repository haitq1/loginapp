import { combineReducers } from 'redux';
import { loginReducer } from '../reducers/Login.red'
import { homeReducer } from '../reducers/Home.red'


export default combineReducers({

    login: loginReducer,
    home: homeReducer

})