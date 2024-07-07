import React from 'react';

const Calculator = ({ selectedFoods, onRemoveFood }) => {
  return (
    <div>
      {selectedFoods.map((food) => (
        <div key={food._id.$oid} style={{ display: 'flex', backgroundColor: 'red',alignItems: 'center' }}>
          <label style={{ flex: 1 }}>
            {food.title} ({food.calories} kcal/{food.weight}g)
          </label>
          <span style={{ margin: '0 10px' }}>{food.grams} g</span>
          <span style={{ margin: '0 10px' }}>{(food.grams * food.calories) / food.weight} kcal</span>
          <button onClick={() => onRemoveFood(food._id.$oid)}>Quitar</button>
        </div>
      ))}
    </div>
  );
};

export default Calculator;
