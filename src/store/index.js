import { configureStore} from "@reduxjs/toolkit";
import { chipsSlice } from "../fetures/Chips/ChipSlice";


export default configureStore({
    reducer: {
        selections: chipsSlice.reducer,
    }
})

