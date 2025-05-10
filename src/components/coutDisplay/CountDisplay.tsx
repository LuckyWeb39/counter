import {ReactNode} from "react";

type Props = {
    children: ReactNode;
};
export const CountDisplay = ({children}: Props) => {
    return (
        <div className="counter-display">
            {children}
        </div>
    );
};