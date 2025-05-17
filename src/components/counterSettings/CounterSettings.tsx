import {CountDisplay} from "../coutDisplay/CountDisplay.tsx";
import {ButtonsWrapper} from "../buttonsWrapper/ButtonsWrapper.tsx";
import {Button} from "../button/Button.tsx";
import {Input} from "../input/Input.tsx";

type CounterProps = {
    min: number;
    max: number;
    isEdit: boolean;
    changeMode: () => void;
    changeMin: (val: number) => void;
    changeMax: (val: number) => void;
    error: { code: number, description: string };
}

export const CounterSettings = ({min, max, isEdit, changeMode, changeMin, changeMax, error}: CounterProps) => {

    return (
        <div className="counter">

            <CountDisplay>
                        <Input title={"Set the min value"}
                               value={min}
                               onChange={changeMin}
                               className={error.code === 1 || error.code ===2 ? 'input-error': "input-count"}
                        />
                        <Input title={"Set the max value"}
                               value={max}
                               onChange={changeMax}
                               className={error.code === 3 ? 'input-error': "input-count"}
                        />

            </CountDisplay>

            <ButtonsWrapper>
                    <Button title={"SET"} onClick={changeMode} disabled={error.code !== 0 || !isEdit}/>
            </ButtonsWrapper>
        </div>
    )
        ;
};