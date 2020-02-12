import {constant} from './index'
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
