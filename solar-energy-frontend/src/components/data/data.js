import './data.css'
import { useEffect, useState } from 'react';
import Weather from '../weather/weather';
import Map from '../map/map';

export default function Data(){
    const [selectedVal, setSelectedVal] = useState('Bekaa');

    useEffect(()=>{
        let select = document.getElementById('drop-down').value;
        setSelectedVal(select);

        let calcButton = document.getElementById('calculate');
        calcButton.addEventListener('click',()=>{
            let kwh = document.getElementById('kwh-per-month').value;
            let offset = document.getElementById('bill-offset-percentage').value;
            let sunHours = document.getElementById('sunlight-hours').value;
            let environmentalFactor = 75;
            let panelOutput = 300;
            
            function nbrSolarPanels (kwh, offset, sunHours, environmentalFactor, panelOutput){
                const solarArrayOutput = kwh / (30 * sunHours)

                const solarArraySize = solarArrayOutput * (offset / environmentalFactor)

                return Math.ceil(solarArraySize * 1000 / (sunHours * panelOutput));
            }

           let solarpanels = document.getElementById('solarpanels');
           solarpanels.textContent = `No. of panels needed: ${nbrSolarPanels(kwh, offset, sunHours, environmentalFactor, panelOutput)}`    
        })

    }, [selectedVal]);

    return(
        <div className='body'>
            <div className='data'>
                <div className='inputdata'>
                    <div className='first-input'>
                        <label htmlFor='kwh-per-month'>*KWH/month </label>
                        <input type={'number'} id='kwh-per-month' placeholder='0' min="0"/>
                    </div>

                    <div className='second-input'>
                        <label htmlFor='bill-offset-percentage'>*Bill Offset % </label>
                        <input type={'number'} id='bill-offset-percentage' placeholder='0' min="0" max="100"/>
                    </div>

                    <div className='third-input'>
                        <label htmlFor='sunlight-houts'>*Sun Hrs/Day </label>
                        <input type={'number'} id='sunlight-hours' placeholder='0' min="0" max="24"/>
                    </div>

                    <select name='region' id="drop-down" onChange={(e)=>{setSelectedVal(e.value)}}>
                        <option value={'bar-elias'}>Bekaa and Hermel</option>
                        <option value={'beirut'}>Beirut</option>
                        <option value={'tripoli'}>North and Akkar</option>
                        <option value={'baskinta'}>Mount Lebanon</option>
                        <option value={'tyre'}>South</option>
                        <option value={'joun'}>Nabatieh</option>
                    </select>

                    <button id='calculate' data-testid='calculate'>Calculate</button>

                    <p id='solarpanels'></p>
                </div>
                <div className='Map'>
                    < Map/>
                </div>
            </div>

            <div className='weatherdata'>
                < Weather location={selectedVal}/>
            </div>
            
        </div>
    );
} 