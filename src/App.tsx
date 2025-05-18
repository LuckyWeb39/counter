import './App.css'
import {Counter} from "./components/counter/Counter.tsx";
import {useEffect, useState} from "react";
import {CounterSettings} from "./components/counterSettings/CounterSettings.tsx";



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
    const [error,setError] = useState({code:0,description:""});

    const changeMode = () => {
        setIsEdit(!isEdit);
    }



    const changeMin = (val: number) => {
        if(val<0) {
            setError({
                code: 1,
                description:'Значение не может быть отрицательным'
            })
        } else if (val>=max){
            setError({
                code: 2,
                description:'Минимальное значение не может быть больше максимального'
            })
        }  else {
            setError({code:0,description:""})
            setIsEdit(true);
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
            setIsEdit(true)
            setMax(val)
        }
    }


    return (
        <div className="App">
            <Counter
                min={min}
                max={max}
                isEdit={isEdit}
                error={error}
            />
            <CounterSettings
                min={min}
                max={max}
                isEdit={isEdit}
                changeMode={changeMode}
                changeMin={changeMin}
                changeMax={changeMax}
                error={error}
            />
        </div>
    )
}

export default App
