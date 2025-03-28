import React from 'react';

const menuItems = [
  {
    name: 'Pizza Margherita',
    description: 'Pizza con salsa de tomate, mozzarella, albahaca fresca y aceite de oliva.',
    price: '10.99€',
  },
  {
    name: 'Pasta Carbonara',
    description: 'Pasta con salsa cremosa de huevo, queso parmesano, panceta y pimienta.',
    price: '12.49€',
  },
  {
    name: 'Ensalada César',
    description: 'Lechuga, pollo a la parrilla, croutons, aderezo César y queso parmesano.',
    price: '8.99€',
  },
  {
    name: 'Hamburguesa Clásica',
    description: 'Hamburguesa con carne de res, queso, lechuga, tomate y mayonesa.',
    price: '9.99€',
  },
  {
    name: 'Tiramisu',
    description: 'Postre italiano con capas de bizcocho, café y crema mascarpone.',
    price: '5.99€',
  },
];

const Home = () => {
  return (
    <div>
      <h1>Bienvenidos al Restaurante</h1>
      <p>Disfruta de una experiencia culinaria única.</p>
      <p>Explora nuestro menú y haz tu pedido online.</p>

      <h2>Menú</h2>
      <div className="menu">
        {menuItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p><strong>Precio:</strong> {item.price}</p>
            <button>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
