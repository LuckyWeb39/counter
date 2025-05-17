import {ChangeEvent} from "react";

type Props = {
    title: string,
    value: number,
    onChange: (val:number) => void,
    className: string,
};

export const Input = ({title, onChange, value, className}: Props) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(Number(e.currentTarget.value));
    }

    return (
        <label className="label-count">
            <span>{title}</span>
            <input type={'number'} className={className} value={value} onChange={onChangeHandler}/>
        </label>
    );
};