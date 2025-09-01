import { configureStore } from "@reduxjs/toolkit";
import storedFruit from "./index"

const StoredFruits=configureStore({
    reducer:{
        stored: storedFruit
    }
})
export default StoredFruits