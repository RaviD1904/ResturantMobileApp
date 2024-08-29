import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import React from 'react';
import * as Icon from 'react-native-feather';
import { themeColors } from '../themes';
import { useNavigation } from '@react-navigation/native';
const ResturantCard = ({resturant}) => {
    const navigation=useNavigation()
  return (
    <TouchableWithoutFeedback
    onPress={()=>navigation.navigate('Resturant',{...resturant})}
    >
      <View style={{
        shadowColor: themeColors.bgColor(0.2),
        shadowRadius:7
      }} className="mr-6 bg-blue-200 rounded-3xl shadow-lg">
        <Image className="h-36 w-64 rounded-t-3xl" source={resturant.image} />
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">{resturant.name}</Text>
          <View className="flex-row items-center space-x-1">
            <Image source={require('../assets/star.png')} className="h-4 w-4" />
            <Text className="text-xs">
              <Text className="text-green-700">{resturant.rating}</Text>
              <Text className="text-gray-700">
                {` ${resturant.review} reviews  `}
                <Text className="font-semibold">{resturant.category}</Text>
              </Text>
            </Text>
          </View>
          <View className="flex-row items-center space-x-1">
                <Icon.MapPin color="gray" width="15" height="15" />
                <Text className="text-gray-700 text-xs">Nearby:{resturant.address}</Text>
          </View>   
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ResturantCard;
