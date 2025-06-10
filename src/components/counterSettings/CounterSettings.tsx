import {CountDisplay} from "../coutDisplay/CountDisplay.tsx";
import {ButtonsWrapper} from "../buttonsWrapper/ButtonsWrapper.tsx";
import {Button} from "../button/Button.tsx";
import {Input} from "../input/Input.tsx";
import {errorCodes} from "../../app/App.tsx";
import {useAppSelector} from "../../common/hooks/useAppSelector.ts";
import {selectChangeMode, selectMax, selectMin} from "../../model/counter-selectors.ts";
import {useAppDispatch} from "../../common/hooks/useAppDispatch.ts";
import {changeMaxAC, changeMinAC, changeModeAC} from "../../model/counter-Reducer.ts";

type CounterProps = {
    error: string | null;
}

export const CounterSettings = ({error}: CounterProps) => {

    const min = useAppSelector(selectMin)
    const max = useAppSelector(selectMax)
    const isEdit = useAppSelector(selectChangeMode)
    const dispatch = useAppDispatch()

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

    const changeMode = () => {
        dispatch(changeModeAC({isEdit:!isEdit}))
        //setIsEdit(!isEdit);
        // localStorage.setItem('min', JSON.stringify(min));
        // localStorage.setItem('max', JSON.stringify(max));
    }

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