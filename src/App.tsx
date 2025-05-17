import './App.css'

import {Counter} from "./components/counter/Counter.tsx";
import {useState} from "react";



function App() {

    const [min, setMin] = useState(0);
    const [max, setMax] = useState(5);

    const [isEdit,setIsEdit] = useState(false);
    const [error,setError] = useState({code:0,description:""});

    const changeMode = () => {
        setIsEdit(!isEdit);
    }


    const changeMin = (val: number) => {
        if(val<0) {
            setError({
                code: 1,
                description:'Значение не может быть меньше нуля'
            })
        } else if (val>=max){
            setError({
                code: 2,
                description:'Минимальное значение не может быть больше максимального'
            })
        }  else {
            setError({code:0,description:""})
            setMin(val)
        }
    }
    const changeMax = (val: number) => {
        if (val<=min){
            setError({
                code: 3,
                description:'Максимальное значение не может быть меньше минимального'
            })
        } else {
            setError({code:0,description:""})
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
