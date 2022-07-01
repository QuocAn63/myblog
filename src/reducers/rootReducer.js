import { combineReducers} from 'redux';
import authReducers from './authReducer'

const rootReducer = combineReducers({authReducers})

export default  rootReducer