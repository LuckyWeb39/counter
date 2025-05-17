import {CountDisplay} from "../coutDisplay/CountDisplay.tsx";
import {ButtonsWrapper} from "../buttonsWrapper/ButtonsWrapper.tsx";
import {Button} from "../button/Button.tsx";
import {useEffect, useState} from "react";
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

export const Counter = ({min, max, isEdit, changeMode, changeMin, changeMax, error}: CounterProps) => {
    const [count, setCount] = useState(min);

    useEffect(() => {
        setCount(min)
    }, [min])

    const IncHandler = () => {
        if (count < max) {
            setCount((prev) => prev + 1);
        }
    }

    const ResetHandler = () => {
        setCount(min)
    }

    return (
        <div className="counter">

            <CountDisplay>
                {isEdit ? (
                    <>
                        <Input title={"Set the min value"} value={min} onChange={changeMin} className={error.code === 1 || error.code ===2 ? 'input-error': "input-count"}/>
                        <Input title={"Set the max value"} value={max} onChange={changeMax} className={error.code === 3 ? 'input-error': "input-count"}/>
                        {!!error && <span className={'error-title'}>{error.description}</span>}
                    </>
                ) : (
                    <span className={count === max ? 'red' : 'black'}>{count}</span>
                )}

            </CountDisplay>

            <ButtonsWrapper>
                {isEdit ? (
                    <Button title={"SET"} onClick={changeMode} disabled={!!error.code}/>
                ) : (
                    <>
                        <Button title={"INC"} onClick={IncHandler} disabled={count === max}/>
                        <Button title={"RES"} onClick={ResetHandler} disabled={count === min}/>
                        <Button title={"SET"} onClick={changeMode} disabled={!!error.code}/>
                    </>
                )}

            </ButtonsWrapper>
        </div>
    )
        ;
};