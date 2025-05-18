import {CountDisplay} from "../coutDisplay/CountDisplay.tsx";
import {ButtonsWrapper} from "../buttonsWrapper/ButtonsWrapper.tsx";
import {Button} from "../button/Button.tsx";
import {useEffect, useState} from "react";


type CounterProps = {
    min: number;
    max: number;
    isEdit: boolean;
    error: { code: number, description: string };
}

export const Counter = ({min, max, isEdit, error}: CounterProps) => {

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

    const errorSpan = <span className={'error-title'}>{error.description}</span>
    const isEditSpan = <span className={'isEdit-title'}>Введите значение и нажмите "SET"</span>
    const displaySpan = <span className={count === max ? 'red' : 'black'}>{count}</span>

    return (
        <div className="counter">
            <CountDisplay>
                {error.code !== 0 ? (
                    <>
                        {errorSpan}
                    </>
                ) : isEdit ? (
                    <>
                        {isEditSpan}
                     </>
                ) : (
                    <>
                        {displaySpan}
                    </>
                )}
            </CountDisplay>

            <ButtonsWrapper>
                <Button title={"INC"} onClick={IncHandler} disabled={count === max || isEdit}/>
                <Button title={"RES"} onClick={ResetHandler} disabled={count === min || isEdit}/>
            </ButtonsWrapper>
        </div>
    )
        ;
};