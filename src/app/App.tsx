import './App.css'
import {Counter} from "../components/counter/Counter.tsx";
import {CounterSettings} from "../components/counterSettings/CounterSettings.tsx";
import {useAppSelector} from "../common/hooks/useAppSelector.ts";
import {selectError, selectMax, selectMin} from "../model/counter-selectors.ts";
import {useEffect} from "react";
import {useAppDispatch} from "../common/hooks/useAppDispatch.ts";
import {changeStatusErrorAC} from "../model/counter-Reducer.ts";

// export const errorCodes = {
//     negativeNumber: 'Значение не может быть отрицательным',
//     minIsBiggerThanMax: 'Минимальное значение не может быть больше максимального',
//     maxIsSmalledThanMin: 'Максимальное значение не может быть меньше минимального'
// }
//
// type KeysOfErrorCodes = keyof typeof errorCodes;
// type ValuesOfErrorCodes = typeof errorCodes[KeysOfErrorCodes];

function App() {
    const min = useAppSelector(selectMin)
    const max = useAppSelector(selectMax)
    const dispatch = useAppDispatch()

    const error = useAppSelector(selectError)
    useEffect(() => {
        if(min < 0 || max < 0){
            dispatch(changeStatusErrorAC({error:'Значение не может быть отрицательным'}))
        } else if(max <= min){
            dispatch(changeStatusErrorAC({error:'Максимальное значение не может быть меньше минимального'}))
        } else if (min >= max){
            dispatch(changeStatusErrorAC({error:'Минимальное значение не может быть больше максимального'}))
        } else{
            dispatch(changeStatusErrorAC({error:''}))
        }
    },[dispatch,min,max])

    // const error: ValuesOfErrorCodes | null =
    //     min < 0 || max < 0 ? errorCodes.negativeNumber :
    //         max <= min ? errorCodes.maxIsSmalledThanMin :
    //             min >= max ? errorCodes.minIsBiggerThanMax :
    //                 null

    return (
        <div className="App">
            <Counter
                error={error}
            />
            <CounterSettings
                error={error}
            />
        </div>
    )
}

export default App
