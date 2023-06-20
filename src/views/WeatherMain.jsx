import { useState } from "react"
import SearchBar from "../components/search-bar"
import Result from "../components/result"
export default function WeatherApp(){
    const[algo, handleAlgo] = useState(null)
    return(
        <div className="weather-container">
            <SearchBar handleSubmit={handleAlgo}/>
            <Result search={algo}/>
        </div>
    )
}