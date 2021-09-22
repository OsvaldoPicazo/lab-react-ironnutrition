import logo from './logo.svg';
import './App.css';
import foodsDataJSON from "./foods.json";
import FoodBox from './components/FoodBox';
import {useState} from 'react';
import AddFoodForm from './components/AddFoodForm';
import { Button, Row } from 'antd';
import SearchFood from './components/SearchFood';
import FoodNull from './components/FoodNull';



function App() {

  const[foods, setFoods] = useState(foodsDataJSON)
  const[foodsData, setFoodsData] = useState(foodsDataJSON)
  const[showForm, setShowForm] = useState(false)

  const addNewFood = (newFood) => {
    const updatedFoods = [...foods, newFood]
    const updatedFoodsData = [...foodsData, newFood]

    setFoodsData(updatedFoodsData)
    setFoods(updatedFoods)
  }

  const searchFoodList = (str) => {
    let searchedFoods;

    if (str === '') {
      searchedFoods = foodsData;
    }
    else {
      for(let i = 0; i < str.length; i++) {
        searchedFoods = foodsData.filter(food => {
          return food.name[i].toLowerCase() === str[i].toLowerCase()
        })
      }
    }
    setFoods(searchedFoods);
  }

  const handleDelete = (foodName) => {
    const filteredFoods = foods.filter((food) => {
      return food.name.toLowerCase() !== foodName.toLowerCase();
    })
    setFoodsData(filteredFoods)
    setFoods(filteredFoods)
  }

  //function to toggle the form hidden or showing style
  const toggleForm = () => {
    setShowForm(!showForm)
  }

  return (
    <div className="App">
      <Button onClick={toggleForm} >{showForm ? "Hide Form" : "Add New Food"}</Button>
      <br/>
      {showForm ? <AddFoodForm addNewFood={addNewFood} /> : null}

      <SearchFood searchFoodList={searchFoodList} />
      <h1>Food List</h1>

      {foods.length !== 0 ? 

      <Row>
      {foods.map(food => {
        return (
          <FoodBox key={food.name} food={food} handleDelete={handleDelete} />
        )
      })
      }
      </Row>
      : <FoodNull />
       }
    </div>
  );
}

export default App;
