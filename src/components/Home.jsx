import { useState } from 'react';

const Home = () => {

    const [mensaje, setMensaje] = useState('Hola Mundo');

    const [numero, setNumero] = useState(3);

    const [nombres, setNombres] = useState(['luis']);

    const handleClick = () => {
        setNumero(5);
    }

    const addName = () => {
        setNombres([...nombres, 'rocio']);
    }

    return <div>
        <h2>useState Example</h2>
        <p>{mensaje}</p>
        <p>{numero}</p>
        <button onClick={handleClick}>Pulsa</button>
        <button onClick={addName}>Agregar Nombre</button>
        <ul>
            {nombres.map(nombre => (
                <li>{nombre}</li>
            ))}
        </ul>
    </div>;
}

export default Home;