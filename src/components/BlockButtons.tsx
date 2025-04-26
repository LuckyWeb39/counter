import {Button} from "./Button.tsx";


type Props = {
    value: number,
    OnClickIncHandler: () => void,
    OnClickResHandler: () => void,
    maxValue: number,
    minValue: number,
};
export const BlockButtons = ({value, maxValue, minValue, OnClickIncHandler, OnClickResHandler}: Props) => {
    return (
        <div className="buttons">
            <Button className={value < maxValue ? 'active': 'disabled'}
                    disabled={value >= maxValue}
                    onClick={OnClickIncHandler}
                    title={'INC'}/>

            <Button className={value === minValue ? 'disabled': 'active'}
                    disabled={value === minValue }
                    onClick={OnClickResHandler}
                    title={'RESET'}/>
        </div>
    );
};