import {constant} from './index'
import axios from 'axios'
import {fromJS} from 'immutable'
export const handleFocurs = () => {
  return {
    type: constant.CHANGEFOCURS
  };
};

export const handleBlur = () => {
  return {
    type: constant.CHANGEFOCURSS
  };
};

export const InitData = (data)=>{
  return {
    type:constant.InitDATA,
    // 因为初始的headerList数组是immutable数组，所以接口里的数组也需要变成这个类型
    data:fromJS(data),
    totalPage:Math.floor(data.length/10)
  }
}

export const getList = ()=>{
  return (dispatch)=>{
    axios.get('/api/headerList.json').then((res) => {
      const data = res.data.data
      const action = InitData(data)
      dispatch(action)
    }).catch(()=>{
      console.log('error')
    })
  }
}
export const changeItem = (page)=>{
  return {
    type:constant.CHANGEITEM,
    page:page
  }
}
export const mouseEnter = ()=>{
  return {
    type:constant.MOUSEENTER
  }
}
export const mouseLeave = ()=>{
  return {
    type:constant.MOUSELEAVE
  }
}