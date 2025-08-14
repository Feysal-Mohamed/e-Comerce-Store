import { configureStore } from "@reduxjs/toolkit"
import cartslices from "../reducer/orderList"

const store=configureStore({
    reducer:{
        cart:cartslices
    }
})
export default store