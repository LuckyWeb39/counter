import {Counter} from "./counter/Counter.tsx";
import {CounterSettings} from "./counterSettings/CounterSettings.tsx";

type Props = {
    min: number;
    max: number;
    isEdit: boolean;
    changeMode: () => void;
    changeMin: (val: number) => void;
    changeMax: (val: number) => void;
    error: { code: number, description: string };

};
export const CounterWrapper = ({min, max, isEdit, changeMode, changeMin, changeMax, error}: Props) => {
    return (
        <div>
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
    );
};