import React from 'react';

const Summary = ({ consumedCalories, dailyGoal }) => {
  const remainingCalories = dailyGoal - consumedCalories;

  return (
    <div className="summary">
        <p>Quedan: {remainingCalories > 0 ? remainingCalories : 0} kcal</p>
      <p>Consumido: {consumedCalories} kcal</p>
      <p>Tasa diaria: {dailyGoal} kcal</p>
      <p>{((consumedCalories / dailyGoal) * 100).toFixed(2)}% de lo normal</p>
    </div>
  );
};

export default Summary;
