import "./InfoBox.css"
import SearchBox from './src/SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'
export default function GetWeatherInfo() {
 
const[wetherInfo,setWeatherInfo]=useState({
 
    city: "Raipur",
    feels_like: 282.68,
    humidity: 92,
    temp: 283.22,
    temp_max: 284.07,
    temp_min: 282.48,
    weather: "light intensity shower rain",
});
let updateInfo=(result)=>{
setWeatherInfo(result)
}
  return (
    <div>
       <SearchBox  updateInfo={ updateInfo}/>
      <InfoBox info={wetherInfo}/>

    </div>
  )
}
