import { Input } from "antd";
import {useState} from "react";

export default function AddFoodForm(props) {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState(100);
    const [servings, setServings] = useState(1);

    const handleNameInput = (event) => setName(event.target.value)
    const handleImageInput = (event) => setImage(event.target.value)
    const handleCaloriesInput = (event) => setCalories(event.target.value)
    const handleServingsInput = (event) => setServings(event.target.value)

    const handleSubmit = (event) => {
        event.preventDefault();
        const newFood = {name, image, calories, servings}
        
        props.addNewFood(newFood)

        setName('');
        setImage('');
        setCalories(100);
        setServings(1);
    }


    return (
            <div className="AddFood">
                <h4>Add Food Entry</h4>

                <form onSubmit={handleSubmit}>
                    <label>Name: </label>
                    <Input type="text" name="name" value={name} onChange={handleNameInput} />

                    <label>Image: </label>
                    <Input type="text" name="image" value = {image} onChange={handleImageInput} />

                    <label>Calories: </label>
                    <Input type="number" name="calories" value={calories} onChange={handleCaloriesInput} />
                    
                    <label>Servings: </label>
                    <Input type="number" name="servings" checked={servings} onChange={handleServingsInput} />

                    <button type="submit">Create</button>
                </form>
            </div>

    )
}
