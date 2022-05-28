import { useState } from 'react';
import React from 'react';

function AddNewForm() {
  const [newFood, setNewFood] = useState();

  const handleMessageChange = (event) => {
    const value = event.target.value;
    setNewFood(value);
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    alert('User submitted form with new food:' + newFood);
    //foods array to be updated
    setNewFood([...food, foodsInfo[foods.push(newFood)]]);
  };

  return (
    <form onSubmit={handleFormSubmission}>
      <table>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Calories</th>
          <th scope="col">Image</th>
        </tr>
        <tr>
          <td>{food.name}</td>
          <td>{food.calories}</td>
          <td>{food.image}</td>
        </tr>
      </table>
      <h1>{newFood}</h1>
      <input
        placeholder="Add new Food..."
        value={newFood}
        onChange={handleMessageChange}
      />
      <button onClick={showInputTable}>Submit New Food</button>
    </form>
  );
}
export default AddNewForm;
