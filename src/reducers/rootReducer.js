import { combineReducers} from 'redux';

import authReducers from './authReducers'
import commentReducers from './commentReducers';

const rootReducer = combineReducers({authReducers, commentReducers})

export default  rootReducer