import { Input } from "antd";
import {useState} from "react";

export default function SearchFood(props) {
    const[search, setSearch] = useState('')

    const handleSearchInput = (event) => {
        setSearch(event.target.value)
        props.searchFoodList(event.target.value)
    }

    return (
        <div className="SearchFood">
            <h4>Search</h4>
            <label>Search </label>
            <Input type="text" name="search" value={search} onChange={handleSearchInput} />
        </div>
    )
}
