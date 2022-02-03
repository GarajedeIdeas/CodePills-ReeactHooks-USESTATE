import { useState } from 'react';

const Counter = () => {

    let [obj, setObj] = useState({
        num: 1
    })

    const [cont, setCont] = useState(0);

    const handleClick = () => {
        const newObj = { ...obj, num: obj.num + 1 };
        setObj(newObj);
    }

    const incrementaPorTres = () => {
        setCont(cont => cont + 1);
        setCont(cont => cont + 1);
        setCont(cont => cont + 1);
    }

    return <div>
        <h2>Counter</h2>
        <p>Contador: {obj.num}</p>
        <button onClick={handleClick}>Incrementa</button>
        <p>Contador 2: {cont}</p>
        <button onClick={incrementaPorTres}>Incrementa x 3</button>
    </div>
}

export default Counter;