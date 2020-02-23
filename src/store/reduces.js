import {combineReducers} from 'redux-immutable'
import {reducer as HeaderReducer} from '../common/header/store'
import {reducer as HomeReducer} from '../pages/home/store'
import {reducer as DetailReducer} from '../pages/detail/store'
import {reducer as LoginReducer} from '../pages/login/store'

// 使用redux-imumutable将reducer变成immutable对象
const reducer = combineReducers({
    header:HeaderReducer,
    home:HomeReducer,
    detail:DetailReducer,
    login:LoginReducer
})
export default reducer