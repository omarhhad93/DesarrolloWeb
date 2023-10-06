import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

function Bebida() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudo obtener la bebida aleatoria");
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData.drinks[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="Bebida d-flex justify-content-center align-items-center">
      {isLoading ? (
        <p>Cargando dato aleatorio...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : data ? (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={data.strDrinkThumb} />
          <Card.Body>
            <Card.Title>{data.strDrink}</Card.Title>
            <Card.Text>{data.strInstructions}</Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <p>No se encontraron datos de bebida</p>
      )}
    </div>
  );
}

export default Bebida;



// function Bebida(){
//     const [data, setData] = useState(null)

//     useEffect(() => {
//         fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
//         .then((response) => response.json())
//         .then((data) => setData(data));
//     }, []);

//     return(
//         <div className='Bebida'>
//             <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src={data ? (
//                 <span>{data.strDrinkThumb}</span>
//                 ) : (
//                 <span>Cargando dato aleatorio...</span>
//                 )} />
//             <Card.Body>
//                 <Card.Title>{data ? (
//                 <span>{data.strDrink}</span>
//                 ) : (
//                 <span>Cargando dato aleatorio...</span>
//                 )}</Card.Title>
//                 <Card.Text>
//                 {data ? (
//                 <span>{data.strInstructionsIT}</span>
//                 ) : (
//                 <span>Cargando dato aleatorio...</span>
//                 )}
//                 </Card.Text>
//             </Card.Body>
//             </Card> 
//         </div>
//     )

// }

// export default Bebida;