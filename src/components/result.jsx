import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
export default function Result({search}){
    const [state, setState] = useState(false)
    const [w_info, setInfo] = useState(null)
    useEffect(()=>{
        const consulta = async(terms) =>{
            const url ='https://weatherapi-com.p.rapidapi.com/current.json?q='+terms
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'ffb077ba4amshff7bea3c8800c8cp143f7bjsnb8a18823bb93',
                    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setInfo(result)
            } catch (error) {
                console.error(error);
            }
        }
        const notEmpty = () =>{
            if(search == null || search == ''){
                setState(false)
            }else{
                setState(true)
                consulta(search)
            }
        }
        notEmpty()
    }, [search])
    useEffect(()=>{
        console.log(w_info)
    },[w_info])
    return(<div>
        {state ? (
            <div>
                {w_info!=null && (
                    <>
                        <h1 className="title">Resultados para: {search}</h1>
                        <img src={w_info.current.condition.icon} alt="" />
                        <h2>{w_info.location.country}</h2>
                        <h2>{w_info.current.temp_c} C°</h2>
                        <h2>{w_info.current.temp_f} F°</h2>
                    </>)}
            </div>
        ):(
            <h1 className="title">Realiza una busqueda</h1>
        )}
    </div>
    )
}
Result.propTypes = {
    search: PropTypes.string
}