import {
  SET_LIST,
  SET_SIZE,
  SET_ITEM,
  REMOVE_ITEM,
} from '@/store/mutation.types';

export default {
  [SET_LIST]: (state, { moduleName, list }) => {
    state[moduleName].list = list;
    console.log(list)
  },

  [SET_SIZE]: (state, { moduleName, size }) => {
    state[moduleName].size = size;
  },

  [SET_ITEM]: (state, { moduleName, item }) => {
    state[moduleName].item = item;
  },

  [REMOVE_ITEM]: (state, { moduleName }) => {
    state[moduleName].item = null;
  }
}
