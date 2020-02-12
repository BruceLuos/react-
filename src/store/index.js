import {createStore} from 'redux'
import reducer from './reduces'



const store = new createStore(reducer)
export default store