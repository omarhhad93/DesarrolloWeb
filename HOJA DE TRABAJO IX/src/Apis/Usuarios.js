//import Productos from '../Producto/Productos';
//import Carrito from '../Carrito/Carrito';
//import React, {useState} from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

function Usuarios(){
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setData(data));
    }, []);

    return(
        <div className='Usuarios d-flex justify-content-center align-items-center'>
            <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Nombre</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {data?.map((user) => (<li key={user.id} > {user.name}</li>))}
          </td>
        </tr>
      </tbody>
    </Table>


        </div>
    )

}

export default Usuarios;