import {RootState} from "../app/store.ts";

export const selectMin = (state:RootState):number=>state.counter.min;
export const selectMax = (state:RootState):number=>state.counter.max;
export const selectCount = (state:RootState):number=>state.counter.count;
export const selectChangeMode = (state:RootState):boolean=>state.counter.isEdit;
export const selectError = (state:RootState):string=>state.counter.error;