import {CountDisplay} from "../coutDisplay/CountDisplay.tsx";
import {ButtonsWrapper} from "../buttonsWrapper/ButtonsWrapper.tsx";
import {Button} from "../button/Button.tsx";
import {useEffect} from "react";
import {useAppSelector} from "../../common/hooks/useAppSelector.ts";
import {selectCount, selectMax, selectMin} from "../../model/counter-selectors.ts";
import {useAppDispatch} from "../../common/hooks/useAppDispatch.ts";
import {incCountAC, resetCountAC} from "../../model/counter-Reducer.ts";


type CounterProps = {
    isEdit: boolean;
    error: string|null;
}

export const Counter = ({isEdit, error}: CounterProps) => {

    const count = useAppSelector(selectCount)
    const min = useAppSelector(selectMin)
    const max = useAppSelector(selectMax)
    const dispatch = useAppDispatch()

    // const [count, setCount] = useState(min);

    useEffect(() => {
        dispatch(resetCountAC())
        //setCount(min)
    }, [dispatch,min])

    const IncHandler = () => {
        if (count < max) {
            dispatch(incCountAC())
            //setCount((prev) => prev + 1);
        }
    }

    const ResetHandler = () => {
        dispatch(resetCountAC())
        //setCount(min)
    }

    const errorSpan = <span className={'error-title'}>{error}</span>
    const isEditSpan = <span className={'isEdit-title'}>Введите значение и нажмите "SET"</span>
    const displaySpan = <span className={count === max ? 'red' : 'black'}>{count}</span>

    return (
        <div className="counter">
            <CountDisplay>

                {error !== null ? (
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