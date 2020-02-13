import {combineReducers} from 'redux-immutable'
import {reducer as HeaderReducer} from '../common/header/store'

// 使用redux-imumutable将reducer变成immutable对象
const reducer = combineReducers({
    header:HeaderReducer
})
export default reducer