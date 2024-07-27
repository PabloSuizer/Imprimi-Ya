import {
    configureStore,
    createSlice
} from "@reduxjs/toolkit"

const initialState = {
    paperType: " ",
    inkType: " ",
    faceType: " ",
    bindingType: " ",
}

export const chipsSlice = createSlice({
    name: "chips",
    initialState,
    reducers: {
        setPaperType: (state, action) => {
            state.paperType = action.payload;
        },
        setInkType: (state, action) => {
            state.inkType = action.payload;
        },
        setFaceType: (state, action) => {
            state.faceType = action.payload;
        },
        setBindingType: (state, action) => {
            state.bindingType = action.payload;
        },
    }
})

export const {
    setPaperType,
    setInkType,
    setFaceType,
    setBindingType,
} = chipsSlice.actions;

export const store = configureStore({
    reducer: {
        selections: chipsSlice.reducer,
    },
});

export default chipsSlice.reducer