import './App.css'
import {Counter} from "../components/counter/Counter.tsx";
import {useState} from "react";
import {CounterSettings} from "../components/counterSettings/CounterSettings.tsx";
import {useAppDispatch} from "../common/hooks/useAppDispatch.ts";
import {changeMaxAC, changeMinAC, changeModeAC} from "../model/counter-Reducer.ts";
import {useAppSelector} from "../common/hooks/useAppSelector.ts";
import {selectChangeMode, selectMax, selectMin} from "../model/counter-selectors.ts";

export const errorCodes = {
    negativeNumber: 'Значение не может быть отрицательным',
    minIsBiggerThanMax: 'Минимальное значение не может быть больше максимального',
    maxIsSmalledThanMin: 'Максимальное значение не может быть меньше минимального'
}

type KeysOfErrorCodes = keyof typeof errorCodes;
type ValuesOfErrorCodes = typeof errorCodes[KeysOfErrorCodes];

function App() {
    const min = useAppSelector(selectMin)
    const max = useAppSelector(selectMax)
    const isEdit = useAppSelector(selectChangeMode)
    const dispatch = useAppDispatch()

    // const [min, setMin] = useState(() => {
    //     return Number(localStorage.getItem("min")) || 0;
    // });
    //
    // const [max, setMax] = useState(() => {
    //     return Number(localStorage.getItem("max")) || 1;
    // });

    //const [isEdit, setIsEdit] = useState(false);

    const changeMode = () => {
        dispatch(changeModeAC({isEdit}))
        //setIsEdit(!isEdit);
        // localStorage.setItem('min', JSON.stringify(min));
        // localStorage.setItem('max', JSON.stringify(max));
    }


    const error: ValuesOfErrorCodes | null =
        min < 0 || max < 0 ? errorCodes.negativeNumber :
            max <= min ? errorCodes.maxIsSmalledThanMin :
                min >= max ? errorCodes.minIsBiggerThanMax :
                    null

    const changeMin = (val: number) => {
        dispatch(changeModeAC({isEdit: true}))
        //setIsEdit(true);
        dispatch(changeMinAC({val}))
        // setMin(val)
    }
    const changeMax = (val: number) => {
        dispatch(changeModeAC({isEdit: true}))
        //setIsEdit(true)
        dispatch(changeMaxAC({val}))
        //setMax(val)
    }


    return (
        <div className="App">
            <Counter
                isEdit={isEdit}
                error={error}
            />
            <CounterSettings
                isEdit={isEdit}
                changeMode={changeMode}
                changeMin={changeMin}
                changeMax={changeMax}
                error={error}
            />
        </div>
    )
}

export default App
