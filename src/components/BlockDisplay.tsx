type Props = {
    value: number,
    maxValue: number,
};
export const BlockDisplay = ({value,maxValue}: Props) => {
    return (
        <div className="countDisplay" >
            <span className={value >= maxValue ? 'dis': 'act'}>{value}</span>
        </div>
    );
};