import { createSlice } from "@reduxjs/toolkit";
import { productData } from "../components/ProductsData";

const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        addItemsToCart(state, action) {
            state.push(action.payload)
        },
        removeItemFromCart(state, action) {
            state.splice(action.payload, 1)
        },
        clearAllCart(state, action) {
            return []
        }
    }
})
const productDatas = productData


const userSlice2 = createSlice({
    name: 'userData',
    initialState: productDatas,
    reducers: {
        setData(state, action) {
            state.push(action.payload)
        },
        setFilterdData(state, action) {
            console.log(action.payload)
            const value = productDatas.filter(element => element.category.startsWith(action.payload))
            return state = value

        },

    }
})

const userData = createSlice({
    name: 'UserData',
    initialState: [],
    reducers: {
        setUserData(state, action) {
            state.push(action.payload)
        },
        userDeleteFromData(state, action) {
            state.splice(action.payload, 1)
        },
        updateUserDetails(state, action) {
            console.log(action.payload)
            state.splice(action.payload.indexToBeDeleted, 1, action.payload.updatedDetails)
        }
    }
})

export const { setData, setFilterdData } = userSlice2.actions
export const { setUserData, userDeleteFromData, updateUserDetails } = userData.actions


export const loginFormUserData = userData.reducer
export const user2Data = userSlice2.reducer
export const { addItemsToCart, removeItemFromCart, clearAllCart } = userSlice.actions
export default userSlice.reducer;



