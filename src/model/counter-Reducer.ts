import {createAction, createReducer} from "@reduxjs/toolkit";

export type TypeInitialState = {
    min: number;
    max: number;
    count: number;
    isEdit: boolean;
}

const initialState: TypeInitialState  = {
    min: 0,
    max: 1,
    count: 0,
    isEdit: false,
}
//APP
export const changeMinAC = createAction<{val: number}>('counter/changeMin');
//export const changeMinAC = createAction('counter/changeMin', (val:number)=>({payload: val}));
export const changeMaxAC = createAction<{val: number}>('counter/changeMax');

//Counter
export const incCountAC = createAction('counter/incCount');
export const resetCountAC = createAction('counter/ResetHandler');
export const changeModeAC = createAction<{isEdit:boolean}>('counter/changeMode');

export const counterReducer = createReducer(initialState, builder => {
    builder
        .addCase(changeMinAC, (state, action) => {
            state.min = action.payload.val
        })
        .addCase(changeMaxAC, (state, action) => {
            state.max = action.payload.val
        })
        .addCase(incCountAC, (state) => {
            state.count += 1
        })
        .addCase(resetCountAC, (state) => {
            state.count = state.min
        })
        .addCase(changeModeAC, (state, action) => {
            state.isEdit = action.payload.isEdit
        })

});