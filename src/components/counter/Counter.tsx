import {useState} from "react";
// import {Button} from "../Button.tsx";
import {BlockButtons} from "../BlockButtons.tsx";
import {BlockDisplay} from "../BlockDisplay.tsx";


export const Counter = () => {

    const [value, setValue] = useState(0)
    const maxValue = 5
    const minValue = 0

    const OnClickIncHandler = () =>{
        if (value < maxValue) {
            setValue(value+1)
        }

    }
    const OnClickResHandler = () =>{
        setValue(0)
    }

    return (
        <div className="countWrapper">

            <BlockDisplay value={value} maxValue={maxValue}/>

            {/*<div className="countDisplay" >*/}
            {/*    <span className={value < maxValue ? 'act': 'dis'}>{value}</span>*/}
            {/*</div>*/}


            <BlockButtons value={value}
                          maxValue={maxValue}
                          minValue={minValue}
                          OnClickIncHandler={OnClickIncHandler}
                          OnClickResHandler={OnClickResHandler}/>

            {/*<div className="buttons">*/}
            {/*    <Button className={value < maxValue ? 'active': 'disabled'}*/}
            {/*            disabled={value >= maxValue}*/}
            {/*            onClick={OnClickIncHandler}*/}
            {/*            title={'INC'}/>*/}

            {/*    <Button className={value === minValue ? 'disabled': 'active'}*/}
            {/*            disabled={value === minValue }*/}
            {/*            onClick={OnClickResHandler}*/}
            {/*            title={'RESET'}/>*/}
            {/*</div>*/}

        </div>
    );
};