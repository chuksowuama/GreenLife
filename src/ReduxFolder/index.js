import { createSlice } from "@reduxjs/toolkit";

const createdReducers = createSlice({
  name: "fruitStore",
  initialState: {
    items: [],
    trendingItems: [],
    searchedTerm: "",
    cart: [],
    wishList: [],
    compare: [],
    expand:[],
    viewed:[],
    registerUser:[],
    ActiveUser:null
  },

  reducers: {
    setfruitData: (state, action) => {
      state.items = action.payload;
      state.trendingItems = action.payload.slice(11, 20);
    },
    setfruitcaetgory: (state, action) => {
      const { category } = action.payload;
      state.items = state.items.filter(
        (items) => items.category.toLowerCase() == category.toLowerCase()
      );
      console.log(state.items);
    },
    searchedReducer: (state, action) => {
      state.searchedTerm = action.payload.searcheditems;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload; // Add this to initialState
    },

    setAddtocart: (state, action) => {
      const { item } = action.payload;
      const existingItem = state.cart.find((i) => i.id === item.id);
      if (existingItem) {
        state.cart = state.cart.filter((i) => i.id !== item.id);
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
    },

    setIncreaseCart: (state, action) => {
      const { item } = action.payload;
      console.log(item);
      const existingProduct = state.cart.find((i) => i.id === item.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      }
    },
    setReMoveCart: (state, action) => {
      const { item } = action.payload;
      const existingProduct = state.cart.find((i) => i.id === item.id);
      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
        } else {
          state.cart = state.cart.filter((i) => i.id !== item.id);
        }
      }
    },

    setaddTowishList: (state, action) => {
      const { item } = action.payload;
      const wishlistItem = state.wishList.find((i) => i.id === item.id);
      if (wishlistItem) {
        state.wishList.filter((i) => i.id !== item.id);
      } else {
        state.wishList.push({ ...item });
      }
    },
    setcompare:(state,action)=>{
      const {item}=action.payload;
       const compareitem = state.compare.find((i) => i.id === item.id);
      if (compareitem) {
        state.compare.filter((i) => i.id !== item.id);
      } else {
        state.compare.push({ ...item });
      }
    },

    setAddtoexpand:(state,action)=>{
      const {item}=action.payload;
      const expanditem=state.expand.find((i)=>i.id===item.id)
      if(expanditem){
        state.expand.filter((i)=>i.id !== item.id);
      }else{
        state.expand.push({...item,quantity:1})
      }
    },

    setviewedProduct:(state,action)=>{
      const{item}=action.payload
      const recentlyViewed=state.viewed.find(Vitem=>Vitem.id===item.id)
      if(!recentlyViewed){
        state.viewed.unshift(item)

        if(state.viewed.length>5){
        state.viewed.pop()
      }
      }
    }
  ,
  setregisterUser:(state,action)=>{
    state.registerUser.push(action.payload)
  },

  setactiveUser:(state,action)=>{
     const{email,password}=action.payload
     const foundUser=state.registerUser.find(user=>user.email===email&& user.password===password)
     if(foundUser){
      state.ActiveUser=foundUser? foundUser:null
     }else{
      state.ActiveUser=null
     }
  },
    setLogoutUser:(state)=>{
    state.ActiveUser = null;
  },
    // ... other reducers
  },
});
export const selectFilteredItems = (state) => {
  if (!state.stored.searchedTerm) return state.stored.items;
  return state.stored.items.filter((item) =>
    item.name.toLowerCase().includes(state.stored.searchedTerm.toLowerCase())
  );
};

export const {
  setfruitData,
  searchedReducer,
  setfruitcaetgory,
  setSearchResults,
  setAddtocart,
  setIncreaseCart,
  setReMoveCart,
  setaddTowishList,
  setcompare,
  setAddtoexpand,
  setviewedProduct,
  setregisterUser,
  setactiveUser,
  setLogoutUser
} = createdReducers.actions;
export default createdReducers.reducer;
