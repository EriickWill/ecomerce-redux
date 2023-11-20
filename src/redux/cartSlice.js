import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cart",
  initialState: {
    itemsInCart: [],
  },

  reducers: {
    addCart: (state, { payload }) => {
      //verificando se o item existe
      const temNoCarrinho = state.itemsInCart.some((e) => {
        return e.id === payload.produto.id;
      });

      if (temNoCarrinho) {
        return {
          ...state,
          itemsInCart: [
            ...state.itemsInCart.map((e) => {
              return e.id == payload.produto.id
                ? { ...payload.produto, quantity: e.quantity + 1 }
                : e;
            }),
          ],
        };
      }
      return {
        ...state,
        itemsInCart: [...state.itemsInCart, payload.produto],
      };
    },
    removeCart: (state, { payload }) => {
      return {
        ...state,
        itemsInCart: [
          ...state.itemsInCart.map((e) => {
            return e.id == payload.produto.id
              ? {
                  ...payload.produto,
                  quantity: e.quantity > 0 ? e.quantity - 1 : 0,
                }
              : e;
          }),
        ],
      };
    },
  },
});

export const { addCart, removeCart } = slice.actions;
export default slice.reducer;
