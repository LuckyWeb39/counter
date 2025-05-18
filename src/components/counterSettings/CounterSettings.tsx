import {CountDisplay} from "../coutDisplay/CountDisplay.tsx";
import {ButtonsWrapper} from "../buttonsWrapper/ButtonsWrapper.tsx";
import {Button} from "../button/Button.tsx";
import {Input} from "../input/Input.tsx";
import {errorCodes} from "../../App.tsx";

type CounterProps = {
    min: number;
    max: number;
    isEdit: boolean;
    changeMode: () => void;
    changeMin: (val: number) => void;
    changeMax: (val: number) => void;
    error: string | null;
}

export const CounterSettings = ({min, max, isEdit, changeMode, changeMin, changeMax, error}: CounterProps) => {

    return (
        <div className="counter">

            <CountDisplay>
                        <Input title={"Set the min value"}
                               value={min}
                               onChange={changeMin}
                               className={error === errorCodes.minIsBiggerThanMax || error === errorCodes.negativeNumber ? 'input-error': "input-count"}
                        />
                        <Input title={"Set the max value"}
                               value={max}
                               onChange={changeMax}
                               className={error === errorCodes.maxIsSmalledThanMin || error === errorCodes.negativeNumber ? 'input-error': "input-count"}
                        />

            </CountDisplay>

            <ButtonsWrapper>
                    <Button title={"SET"} onClick={changeMode} disabled={error !== null || !isEdit}/>
            </ButtonsWrapper>
        </div>
    )
        ;
};