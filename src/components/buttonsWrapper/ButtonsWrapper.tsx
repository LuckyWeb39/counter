import {ReactNode} from "react";

type Props = {
    children: ReactNode;
};
export const ButtonsWrapper = ({children}: Props) => {
    return (
        <div className="button-wrapper">
            {children}
        </div>
    );
};