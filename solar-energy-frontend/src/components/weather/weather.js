import './weather.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Weather(props){
    const [sunlightVal, setSunlightVal] = useState(0)
    const [upcomingWeather, setUpcomingWeather] = useState('')


    useEffect(()=>{
        const pattern1 = /Average sunshine in January(.*?)mt-3 lh-sm/g
        const pattern2 = /[+-]?(\d*\.)?\d+h/g;
        axios.get(`http://localhost:3004/sunshine/${props.location}-climate`)
        .then(result =>{
            const currSunVal = String(String(result.data).match(pattern1)).match(pattern2)
            let avgHours = 0;

            for(let i = 0; i < 12; i++)
                avgHours = avgHours + parseFloat(currSunVal[i].replace('h',''))/12

            avgHours = avgHours.toFixed(1)
            setSunlightVal(avgHours)
        })
        .catch(err =>{


        })

        const pattern3 = /<div class="pt-3 px-2 lh-sm">(.*?)<.div><.div><.div><.div>/g
        const pattern4 = />(.*?)</g
        const pattern5 = /[^<>,]/g
        axios.get(`http://localhost:3004/forecast/${props.location}-long-term-weather-forecast`)
        .then(result =>{
            const currForecastVal = String(String(String(result.data).match(pattern3)[0]).match(pattern4)).match(pattern5).join('')
            setUpcomingWeather(currForecastVal)    
        })
        .catch(err =>{
        })

    }, [props.location]);


    return(

        <div className='weatherbody'>
            <div className='avgsunshine'>
                <img src={require('../../assets/sun.png')} alt='sun'/>
                <p><span>{sunlightVal}</span> Hours of daily sunlight in {props.location}</p>
            </div>

            <div className='weathertext'>
                <h3>Forecast:</h3>
                <p>{upcomingWeather}</p>
            </div>
        </div>


    )
}