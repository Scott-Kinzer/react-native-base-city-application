import { Image, Text, View } from 'react-native';
import CityListItemContainer from '../components/CityListItemContainer';

const weatherImageuRL = "https://static6.depositphotos.com/1000978/557/i/950/depositphotos_5579067-stock-photo-ancient-newspapers.jpg"

const News = () => {
    return (
        <CityListItemContainer>        
            <Image source={{uri: weatherImageuRL}} className="h-full w-full absolute rounded-md" />
            <View className="h-20 relative m-2 rounded-md flex-row justify-between">
            <View className="h-20 relative rounded-md flex-row  box-border">
            <Text className=" mt-2 text-2xl relative text-black font-bold">News</Text>
            </View>
            <View className="h-20 relative rounded-md box-border drop-shadow-lg">
                <View style={{backgroundColor:'#fff', shadowColor:'#000', shadowOffset:{width:0, height:3}, shadowOpacity:0.3, elevation:3}} className="mt-6 rounded-full bg-white p-1 box-border">
                <Text bg-white className="text-lg relative text-black font-bold">What happened today?</Text>
                </View>
            </View>
            </View>
        </CityListItemContainer>
    );
  }

export default News;