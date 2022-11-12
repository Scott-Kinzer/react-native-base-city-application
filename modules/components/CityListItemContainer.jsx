import { Image, Text, View } from 'react-native';

const weatherImageuRL = "https://static6.depositphotos.com/1000978/557/i/950/depositphotos_5579067-stock-photo-ancient-newspapers.jpg"

const CityListItemContainer = ({children}) => {
    return (
    <View className="h-20 relative m-2 rounded-md">
       {children}
    </View>
    );
  }

export default CityListItemContainer;