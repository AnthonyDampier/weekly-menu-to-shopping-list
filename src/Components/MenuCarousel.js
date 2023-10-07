import React, { useState } from 'react';
import './MenuCarousel.css';


const MenuCarousel = ({ menuItems }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wasGeneratedShoppingList, setGeneratedList] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === menuItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? menuItems.length - 1 : prevIndex - 1
    );
  };

  const [cart, setCart] = useState([]);

  const addToCart = (index) => {
    // Make a copy of the cart array and add the selected item
    const updatedCart = [...cart];
    updatedCart.push(menuItems[index]);
    console.log(cart);
    setCart(updatedCart);
  };

  const generateShoppingList = () => {
    const shoppingCart = cart;
    setGeneratedList(true);
    console.log(shoppingCart);
  }

  const removeShoppingListItem = (indexToRemove) => {
    const updateCart = cart.filter((_, index) => index !== indexToRemove)
    setCart(updateCart);
    console.log(updateCart);
  }

  const addMoreItems = () => {
    setGeneratedList(false);
  }

  const acceptList = () => {
    // Generate compressed ingredients list of that is sharable & List of Recipe Name & QR Code to visit recipe
      // consume cart, filter list by 
    console.log("Generate Shopping List");

  }

  return (
    <React.Fragment>
      <div className="menu-carousel">
        <button onClick={handlePrev}>Previous</button>
        <div className="menu-card">
          <h2>{menuItems[currentIndex].name}</h2>
          <img
            src={menuItems[currentIndex].imageSrc}
            alt={menuItems[currentIndex].description}
            width="200px"
          />
          <p>{menuItems[currentIndex].description}</p>
        </div>
        <button onClick={handleNext}>Next</button>
      </div>
      <button onClick={() => addToCart(currentIndex)}>
        Add to Cart
      </button>
      <button onClick={() => generateShoppingList()}>Generate Shopping List</button>
      <div class="shoppingList">
      { wasGeneratedShoppingList && 
        <div>
          <h2>Shopping List</h2>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.description}
                <ol>
                  {
                    item.ingredients.map((ingredient, index) => (
                      <li key={index}>
                        {ingredient.name} - {ingredient.QuantityPerServing}
                      </li>
                    ))
                  }
                </ol>
                <button onClick={() => removeShoppingListItem(index)}>Remove</button>
              </li>
              
            ))}
          </ul>
          <button onClick={() => acceptList()}>Accept</button>
          <button onClick={() => addMoreItems()}>Add More</button>
        </div>
      }
      </div>
    </React.Fragment>
  );
};

export default MenuCarousel;
