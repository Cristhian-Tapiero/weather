import PropTypes from 'prop-types'
import { useState } from 'react'
export default function SearchBar({handleSubmit}){
    const [place, setPlace] = useState('')
    const handleChange = (event) =>{
        setPlace(event.target.value)
    }
    const handleSub = () =>{
        handleSubmit(place)
        setPlace('')
    }
    return(
        <form 
        className="search-form" 
        onSubmit={(e)=>{
            e.preventDefault()
            handleSub()
            }}>
            <input 
            type="text" 
            className="search-box" 
            placeholder="Lugar" 
            value={place} 
            onChange={handleChange}/>
            <button 
            className="search-button">
                <span className="material-symbols-outlined">
                    search
                </span>
            </button>
        </form>
    )
}
SearchBar.propTypes = {
    handleSubmit: PropTypes.func
}