import './App.css'
import {Counter} from "../components/counter/Counter.tsx";
import {CounterSettings} from "../components/counterSettings/CounterSettings.tsx";
import {useAppSelector} from "../common/hooks/useAppSelector.ts";
import {selectMax, selectMin} from "../model/counter-selectors.ts";

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

    const error: ValuesOfErrorCodes | null =
        min < 0 || max < 0 ? errorCodes.negativeNumber :
            max <= min ? errorCodes.maxIsSmalledThanMin :
                min >= max ? errorCodes.minIsBiggerThanMax :
                    null

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
