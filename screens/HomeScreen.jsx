import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import News from '../modules/news/News';
import Weather from '../modules/weather/Weather';

const imageCity = "https://4.bp.blogspot.com/-gpRfyaJ-BEk/V64Wgpu1mPI/AAAAAAAACtg/4_U7RULhhNwMNpjmHBEDHNeIacA2MdZhwCPcB/s1600/trip-impressions-ukraine-Strij-39_full.jpg"

const  HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <SafeAreaView>
                <View className="bg-slate-5=900 h-20 relative flex justify-center items-center">
                    <Image source={{uri: imageCity}} className="h-full w-full absolute" />
                    <Text className="text-5xl relative text-white font-bold">Stryi</Text>
                </View>
                <Weather />
                <News />
        </SafeAreaView>
    );
  }

export default HomeScreen;