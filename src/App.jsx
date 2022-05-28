import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import { useState } from 'react';
import foodsInfo from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';

function App() {
  const [foods, setFoods] = useState(foodsInfo);

  return (
    <div>
      <h1>
        <strong>IronNutrition</strong>
      </h1>
      <div className="form">
        <AddFood />
      </div>
      {foods.map((eachFood) => {
        return <FoodBox food={eachFood} />;
      })}
    </div>
  );
}

export default App;
