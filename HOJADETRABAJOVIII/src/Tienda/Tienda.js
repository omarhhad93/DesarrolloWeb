import Productos from '../Producto/Productos';
import Carrito from '../Carrito/Carrito';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Tienda(){
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const addToCart = (product) => {
      const existingItem = cart.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
        setCart([...cart]);
      } else {
        const newProduct = { ...product, quantity: 1 };
        setCart([...cart, newProduct]);
      }
  
      setTotal(total + product.price);
    };
  
    const removeFromCart = (product) => {
      const existingItem = cart.find((item) => item.id === product.id);
  
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          const updatedCart = cart.filter((item) => item.id !== product.id);
          setCart(updatedCart);
        }
        setTotal(total - product.price);
      }
    };
  
    const products = [
      {
        id: 1,
        name: 'Granos',
        price: 50,
        image: 'https://d1cft8rz0k7w99.cloudfront.net/n/2/8/7/5/28759f58a50451e0bed3bc7209b940d96483b887_Grains_26219_01.jpg',
      },
      {
        id: 2,
        name: 'Enlatados',
        price: 30,
        image: 'https://d1cft8rz0k7w99.cloudfront.net/n/3/e/f/1/3ef1efabc1bcd4dc85bb9cbb85264102404271f2_228742_01.jpg',
      },
      {
        id: 3,
        name: 'Aceites',
        price: 45,
        image: 'https://d1cft8rz0k7w99.cloudfront.net/n/4/0/4/9/4049f4737b8751e045e819910b21378cc252d6a5_Cookingoils_420379_01.jpg',
      },
      {
        id: 4,
        name: 'Bebidas',
        price: 75,
        image: 'https://d1cft8rz0k7w99.cloudfront.net/n/8/1/2/6/8126ba27f8729fc8fef8ea22dc7a2f1ca11c49d0_SoftDrinks_446764_01.jpg',
      },
      {
        id: 5,
        name: 'Carnes',
        price: 150,
        image: 'https://d1cft8rz0k7w99.cloudfront.net/n/0/0/b/5/00b5934f8ca3a6cda8ec45d2c9b8e3fdfe2db2b8_Meat_158967_01.jpg',
      }
    ];

return(
    <div className="container">
        <div>
          <div className="row">
            {products.map((product) => (
              <Productos
                key={product.id}
                {...product}
                onAddToCart={() => addToCart(product)}
              />
            ))}
          </div>
          <Carrito items={cart} total={total} onRemoveFromCart={removeFromCart} />
        </div>
      </div>
);  
}

export default Tienda;