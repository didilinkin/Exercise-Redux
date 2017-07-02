import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products: products
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  })
}

// export const loginIn = auth => (dispatch, getState) => {
//   console.log('action!')

//   dispatch({
//     type: types.LOGIN_IN
//   })
// }

// export function addTodo(text) {
//   return { type: ADD_TODO, text }
// }

export const loginIn = () => dispatch => {
  console.log('action!')

  return {
    type: types.LOGIN_IN
  }
}

export const loginOut = auth => (dispatch, getState) => {
  dispatch({
    type: types.LOGIN_OUT
  })
}
