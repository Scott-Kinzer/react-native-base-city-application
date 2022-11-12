import { Image, Text, View } from 'react-native';

const weatherImageuRL = "https://cdn.pixabay.com/photo/2018/08/23/07/35/thunderstorm-3625405__480.jpg"

const Weather = () => {
    return (
    <View className="h-20 relative m-2 rounded-md">
        <Image source={{uri: weatherImageuRL}} className="h-full w-full absolute rounded-md" />
        <View className="h-20 relative m-2 rounded-md flex-row justify-between">
        <View className="h-20 relative rounded-md flex-row  box-border">
           <Text className=" mt-2 text-2xl relative text-white font-bold">Weather</Text>
           <Text className="ml-2 mt-2 text-2xl relative text-white">24°</Text>
        </View>
        <View className="h-20 relative rounded-md box-border drop-shadow-lg">
           <Text className="ml-2 mt-8 text-lg relative text-white font-bold">Rain is soon..</Text>
        </View>
        </View>
    </View>
    );
  }

export default Weather;