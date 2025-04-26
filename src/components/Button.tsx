type Props = {
    onClick: ()=> void,
    className: string,
    disabled: boolean,
    title: string,

};
export const Button = ({onClick,className,disabled,title}: Props) => {
    return <button onClick={onClick} className={className} disabled={disabled}>{title}</button>
};