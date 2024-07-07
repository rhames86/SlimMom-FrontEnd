import React, { useState } from 'react';
import FoodList from './FoodList';
import Calculator from './Calculator';
import Summary from './Summary';
import NoRecommended from './NoRecommended';

const DiaryCalculator = () => {
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [consumedCalories, setConsumedCalories] = useState(0);
  const [dailyGoal, setDailyGoal] = useState(2800);

  const handleFoodSelect = (food) => {
    const newSelectedFoods = [...selectedFoods, food];
    setSelectedFoods(newSelectedFoods);

    const totalCalories = newSelectedFoods.reduce((total, f) => 
      total + (f.grams * f.calories) / f.weight, 0
    );
    setConsumedCalories(totalCalories);
  };

  const handleRemoveFood = (id) => {
    const updatedFoods = selectedFoods.filter(food => food._id.$oid !== id);
    setSelectedFoods(updatedFoods);

    const totalCalories = updatedFoods.reduce((total, f) => 
      total + (f.grams * f.calories) / f.weight, 0
    );
    setConsumedCalories(totalCalories);
  };

  return (
    <div className="diary-calculator">
      <FoodList onSelect={handleFoodSelect} />
      <Calculator
        selectedFoods={selectedFoods}
        onRemoveFood={handleRemoveFood}
      />
      <Summary consumedCalories={consumedCalories} dailyGoal={dailyGoal} />
      <NoRecommended />
    </div>
  );
};

export default DiaryCalculator;
