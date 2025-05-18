import './App.css'
import {Counter} from "./components/counter/Counter.tsx";
import {useState} from "react";
import {CounterSettings} from "./components/counterSettings/CounterSettings.tsx";

export const errorCodes = {
    negativeNumber: 'Значение не может быть отрицательным',
    minIsBiggerThanMax: 'Минимальное значение не может быть больше максимального',
    maxIsSmalledThanMin: 'Максимальное значение не может быть меньше минимального'
}

type KeysOfErrorCodes = keyof typeof errorCodes;
type ValuesOfErrorCodes = typeof errorCodes[KeysOfErrorCodes];

function App() {

    const [min, setMin] = useState(() => {
        return Number(localStorage.getItem("min")) || 0;
    });
    const [max, setMax] = useState(() => {
        return Number(localStorage.getItem("max")) || 0;
    });


    const [isEdit, setIsEdit] = useState(false);

    const changeMode = () => {
        setIsEdit(!isEdit);
        localStorage.setItem('min', JSON.stringify(min));
        localStorage.setItem('max', JSON.stringify(max));
    }


    const error: ValuesOfErrorCodes | null =
        min < 0 || max < 0 ? errorCodes.negativeNumber :
            max <= min ? errorCodes.maxIsSmalledThanMin :
                min >= max ? errorCodes.minIsBiggerThanMax :

                    null

    const changeMin = (val: number) => {
        setIsEdit(true);
        setMin(val)
    }
    const changeMax = (val: number) => {
        setIsEdit(true)
        setMax(val)
    }


    return (
        <div className="App">
            <Counter
                min={min}
                max={max}
                isEdit={isEdit}
                error={error}
            />
            <CounterSettings
                min={min}
                max={max}
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
