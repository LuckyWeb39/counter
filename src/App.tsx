import './App.css'

import {Counter} from "./components/counter/Counter.tsx";
import {useEffect, useState} from "react";

function App() {

    const [min, setMin] = useState(() => {
        return Number(localStorage.getItem("minValue")) || 0;
    });
    const [max, setMax] = useState(() => {
        return Number(localStorage.getItem("maxValue")) || 0;
    });

    useEffect(() => {
        localStorage.setItem('minValue', JSON.stringify(min));
        localStorage.setItem('maxValue', JSON.stringify(max));
    }, [min, max]);

    const [isEdit,setIsEdit] = useState(false);
    const [error,setError] = useState('');

    const changeMode = () => {
        setIsEdit(!isEdit);
    }


    const changeMin = (val: number) => {
        if(val<0) {
            setError('Минимальное значение должно быть больше нуля')
        } else if (val>=max){
            setError('Минимальное значение должно быть меньше максимального')
        }  else {
            setError('')
            setMin(val)
        }
    }
    const changeMax = (val: number) => {
        if (val<=min){
            setError('Максимальное значение должно быть больше минимального')
        } else {
            setError('')
            setMax(val)
        }
    }


    return (
        <Counter
        min={min}
        max={max}
        isEdit={isEdit}
        changeMode={changeMode}
        changeMin={changeMin}
        changeMax={changeMax}
        error={error}
        />
    )
}

export default App
