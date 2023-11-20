import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
  name: "products",
  initialState: {
    data: [],
  },

  reducers: {
    setProducts: (state, action) => {
      const produtos = action.payload.data.map((e)=>{ 
        return {...e,quantity:0}
      })
      return {
        ...state,
        data: [...produtos],
      };
    },
  },
});
export const { setProducts } = slice.actions;

export default slice.reducer;
