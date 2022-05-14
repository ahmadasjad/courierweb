import {createSlice} from '@reduxjs/toolkit';
export const UserDetailsSlice=createSlice({
    name:'UserDetailsSlice',
    initialState:{
        userName:'',
        token:'',
        logedUserDetails:'',
    },
    reducers:{
        setUserName:(state,action)=>{
            state.userName=action.payload;
        },
        setLogedUserDetails:(state,action)=>{
            state.logedUserDetails=action.payload;
        }
    }
});
export const {
    setUserName,
    setLogedUserDetails,
} = UserDetailsSlice.actions;
// the function below is called a selector and allows us to select a value from the state.
// selector can be defined inline where they can be used instead of in the slice file.

export const getLogedUser=(state)=>
    state.UserDetailsSlice.logedUserDetails;
///we can also write thunks by hand , which may contain both sync and async logic

export default UserDetailsSlice.reducer;