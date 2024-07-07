import React, { useState } from 'react';
import foodData from './FoodData.json';

const FoodList = ({ onSelect }) => {
  const [foodName, setFoodName] = useState('');
  const [grams, setGrams] = useState('');

  const handleFoodNameChange = (e) => {
    setFoodName(e.target.value);
  };

  const handleGramsChange = (e) => {
    setGrams(e.target.value);
  };

  const handleAddClick = () => {
    if (foodName && grams) {
      const food = foodData.find((f) => f.title.toLowerCase() === foodName.toLowerCase());
      if (food) {
        const foodWithGrams = {
          ...food,
          grams: parseInt(grams),
        };
        onSelect(foodWithGrams);
        setFoodName('');
        setGrams('');
      } else {
        alert('Alimento no encontrado');
      }
    }
  };

  return (
    <div>
      <div>
        <input
          color='#9B9FAA'    
          type="text"
          placeholder="Nombre del alimento"
          value={foodName}
          onChange={handleFoodNameChange}
        />
        <input
          type="number"
          placeholder="Gramos"
          value={grams}
          onChange={handleGramsChange}
        />
        <button onClick={handleAddClick} disabled={!foodName || !grams}>
          Agregar
        </button>
      </div>
    </div>
  );
};

export default FoodList;
