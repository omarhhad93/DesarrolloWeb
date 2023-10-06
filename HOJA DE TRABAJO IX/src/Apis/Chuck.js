import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

function Chuck(){
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("https://api.chucknorris.io/jokes/random")
        .then((response) => response.json())
        .then((data) => setData(data));
    }, []);

    return(
        <div className='Chuck d-flex justify-content-center align-items-center'>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png" />
            <Card.Body>
                <Card.Title>CHUCK NORRIS JOKES</Card.Title>
                <Card.Text>
                {data ? (
                <span>{data.value}</span>
                ) : (
                <span>Cargando dato aleatorio...</span>
                )}
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    )

}

export default Chuck;