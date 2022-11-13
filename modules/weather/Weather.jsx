import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import CityListItemContainer from "../components/CityListItemContainer";
import { useQuery } from "react-query";
import { getWeatherOfTheCity } from "./weatherService/weatherService";

const weatherImageuRL =
  "https://cdn.pixabay.com/photo/2018/08/23/07/35/thunderstorm-3625405__480.jpg";

const Weather = () => {
  const [weatherData, setWeatherData] = useState();
  useQuery(["weather"], getWeatherOfTheCity, {
    onSuccess: (data) => {
      setWeatherData(data);
    },
  });

  if (!weatherData) {
    return;
  }
  return (
    <TouchableOpacity>
      <CityListItemContainer>
        <Image
          source={{ uri: weatherImageuRL }}
          className="h-full w-full absolute rounded-md"
        />
        <View className="h-20 relative m-2 rounded-md flex-row justify-between">
          <View className="h-20 relative rounded-md flex-row  box-border">
            <Text className=" mt-2 text-2xl relative text-white font-bold">
              Weather {weatherData.name}
            </Text>
            <Text className="ml-2 mt-2 text-2xl relative text-white">
              {Math.floor(weatherData.main.temp)}°
            </Text>
          </View>
          <View className="h-20 relative rounded-md box-border drop-shadow-lg">
            <Text className="ml-2 mt-8 text-lg relative text-white font-bold">
              {weatherData.weather[0].description}
            </Text>
          </View>
        </View>
      </CityListItemContainer>
    </TouchableOpacity>
  );
};

export default Weather;
