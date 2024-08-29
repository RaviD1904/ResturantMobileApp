import { View, Text } from 'react-native'
import React from 'react'
import { fetured } from '../constant'
import { useNavigation } from '@react-navigation/native';
import MapView,{Marker} from "react-native-maps"

const DeliveryScreen = () => {
    const resturant=fetured[0].resturant[0];
    const navigation=useNavigation()
  return (
    <View className="flex-1">
      {/* <MapView initialRegion={{
            latitude:resturant.lat,
            longitude:resturant.lng,
            latitudeDelta:0.01,
            longitudeDelta:0.01
      }}
      className='flex-1'
      mapType='standard'
      >
        <Marker coordinate={{
             latitude:resturant.lat,
             longitude:resturant.lng,
        }}/>

      </MapView> */}
      <Text>Delivery screen</Text>
    </View>
  )
}

export default DeliveryScreen