import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// eslint-disable-next-line react/prop-types
export default function SearchBox({ updateInfo}) {
  let [city, setCity] = useState("");
  let [error,setError]=useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "0fad6a0d8b3503e686512d9600bdfa2e";

  let getWeather = async () => {
    // eslint-disable-next-line no-useless-catch
    try{
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units`);
    let jsonResponse = await response.json();
    let result = {
      city:city,
      temp: jsonResponse.main.temp,

      humidity: jsonResponse.main.humidity,

      temp_max: jsonResponse.main.temp_max,

      temp_min: jsonResponse.main.temp_min,
      feels_like: jsonResponse.main.feels_like,
      weather:jsonResponse.weather[0].description,
    };
    console.log(result);
    return result;

    }
    catch(err){
     throw err;
    }
    
  }

    let handleChange = (event) => {
      setCity(event.target.value);
    };

    let handleSubmit =async (event) => {
      try{
        console.log(city);
      event.preventDefault();
      setCity("");
     let information=await getWeather();
     updateInfo(information);

      }catch(err){
        setError(true)

      }
    
    };

    return (
      <div>
        <h2> Search for weather </h2>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "5px",
            alignItems: "center",
          }}
          action=""
          className="form"
        >
          <TextField
            style={{ width: "200px" }}
            onChange={handleChange}
            id="city"
            label="city-name"
            variant="outlined"
            required
            value={city}
          />

          <br />
          <Button type="submit" variant="contained">
            Contained
          </Button>
          {error && <p>No such place exists ! </p>}
        </form>
     
      </div>
      
    );
  };

