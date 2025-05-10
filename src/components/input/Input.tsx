import {ChangeEvent} from "react";

type Props = {
    title: string,
    value: number,
    onChange: (val:number) => void,
    error: string,
};

export const Input = ({title, onChange, value, error}: Props) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(Number(e.currentTarget.value));
    }

    return (
        <label className="label-count">
            <span>{title}</span>
            <input type={'number'} className={error ? 'input-error': 'input-count'} value={value} onChange={onChangeHandler}/>
        </label>
    );
};