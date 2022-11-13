import axios from 'axios';
import { REACT_APP_WEATHER_API_KEY } from "@env"


export const getWeatherOfTheCity = async () => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=49.255&lon=23.85&appid=${REACT_APP_WEATHER_API_KEY}&units=metric`);
    return response.data;
}