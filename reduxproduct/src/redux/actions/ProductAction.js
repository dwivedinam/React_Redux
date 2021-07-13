import { ActionTypes} from '../contants/action-types'

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};



export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {setProducts, selectedProduct,removeSelectedProduct}