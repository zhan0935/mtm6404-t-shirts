import React, { useState } from "https://esm.sh/react@19";
import ReactDOM from "https://esm.sh/react-dom@19/client";

const tshirts = [
  {
    title: 'Blue T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Bright Purple T-Shirt',
    image: 'bright-purple-t-shirt.jpg',
    price: 5.99,
    stock: 1,
    quantity: 1
  },
  {
    title: 'Cobalt Blue T-Shirt',
    image: 'cobalt-blue-t-shirt.jpg',
    price: 9.99,
    stock: 5,
    quantity: 1
  },
  {
    title: 'Green T-Shirt',
    image: 'green-t-shirt.jpg',
    price: 6.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Grey T-Shirt',
    image: 'grey-t-shirt.jpg',
    price: 4.99,
    stock: 2,
    quantity: 1
  },
  {
    title: 'Light Green T-Shirt',
    image: 'light-green-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Purple T-Shirt',
    image: 'purple-t-shirt.jpg',
    price: 7.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Red T-Shirt',
    image: 'red-t-shirt.jpg',
    price: 6.99,
    stock: 3,
    quantity: 1
  },
  {
    title: 'Teal T-Shirt',
    image: 'teal-t-shirt.jpg',
    price: 7.99,
    stock: 2,
    quantity: 1
  }
];



const App = () => {
  return (
    <div>
      <h1>T-Shirts</h1>

      <div className="tshirt-list">
        {tshirts.map((shirt) => {
          return (
            <div className="tshirt" key={shirt.title}>
              <img
                src={"./images/" + shirt.image}
                alt={shirt.title}
              />

              <h2>{shirt.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
const App = () => {
  const [shirts, setShirts] = useState(tshirts);

  const quantityHandler = (event, index) => {
    const updatedShirts = shirts.map((shirt, shirtIndex) => {
      if (shirtIndex === index) {
        return {
          ...shirt,
          quantity: Number(event.target.value)
        };
      }

      return shirt;
    });

    setShirts(updatedShirts);
  };

  const buyHandler = (index) => {
    const updatedShirts = shirts.map((shirt, shirtIndex) => {
      if (shirtIndex === index) {
        return {
          ...shirt,
          stock: shirt.stock - shirt.quantity,
          quantity: 1
        };
      }

      return shirt;
    });

    setShirts(updatedShirts);
  };

  return (
    <div className="tshirt-list">
      {shirts.map((shirt, index) => {
        const quantityOptions = [];

        for (let i = 1; i <= shirt.stock; i++) {
          quantityOptions.push(
            <option key={i} value={i}>
              {i}
            </option>
          );
        }

        return (
          <article className="tshirt-card" key={shirt.title}>
            <img
              src={`./images/${shirt.image}`}
              alt={shirt.title}
            />

            <h2>{shirt.title}</h2>

            <p className="price">
              Price: ${shirt.price.toFixed(2)}
            </p>

            <p className="stock">
              Remaining stock: {shirt.stock}
            </p>

            {shirt.stock === 0 ? (
              <p className="out-of-stock">Out of Stock</p>
            ) : (
              <div>
                <label>
                  Quantity:
                  <select
                    value={shirt.quantity}
                    onChange={(event) => quantityHandler(event, index)}
                  >
                    {quantityOptions}
                  </select>
                </label>

                <button onClick={() => buyHandler(index)}>
                  Buy
                </button>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);