import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {fetured} from '../constant';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import * as Icon from 'react-native-feather';
import {themeColors} from '../themes';
import {useDispatch, useSelector} from 'react-redux';
import {selectedResturant} from '../redux-slices/resturantSlices';
import {removeFromCart, selectedCartItems, selectedCartTotal} from '../redux-slices/cartSlice';
const CartScreen = () => {
  const [groupedItems, setGroupedItems] = useState({});
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const resturant = useSelector(selectedResturant);
  const cartItems = useSelector(selectedCartItems);
  const cartTotal = useSelector(selectedCartTotal);
const deliveryFee=20;
  useEffect(() => {
    const items = cartItems?.reduce((group, item) => {
      if (group[item?.id]) {
        group[item?.id]?.push(item);
      } else {
        group[item?.id] = [item];
      }
      return group;
    }, {});
    setGroupedItems(items);
  }, [cartItems]);
  return (
    <View
      className="bg-white flex-1"
      style={{borderTopLeftRadius: 15, borderTopRightRadius: 15}}>
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          style={{backgroundColor: themeColors.bgColor(1)}}
          className="absolute top-5 left-2 bg-gray-50 p-2 rounded-full shadow z-10"
          onPress={() => navigation.goBack()}>
          <Icon.ArrowLeft strokeWidth={3} stroke={'white'} />
        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-xl">Your Cart</Text>
          <Text className="text-center text-gray-500">{resturant.name}</Text>
        </View>
      </View>
      <View
        className="flex-row px-4 items-center"
        style={{backgroundColor: themeColors.bgColor(0.2)}}>
        <Image
          source={require('../assets/restaurants/rest1.jpeg')}
          className="w-20 h-20 rounded-full"
        />
        <Text className="flex-1 pl-4">delivery in 20-30 min</Text>
        <TouchableOpacity>
          <Text className="font-bold" style={{color: themeColors.text}}>
            Change
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
        className="bg-white pt-5">
        {
        Object.entries(groupedItems)?.map(([key,items]) => {
            let dish=items[0];
          return (
            <View
              key={key}
              className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-2xl">
              <Text className="font-bold" style={{color: themeColors.text}}>
                {items.length} X{' '}
              </Text>
              <Image className="h-14 w-14 rounded-full" source={dish.image} />
              <Text className="flex-1 font-bold text-gray-700">
                {dish.name}
              </Text>
              <Text className="font-semibold text-base">₹ {dish.price}</Text>
              <TouchableOpacity
                onPress={()=>dispatch(removeFromCart({id:dish.id}))}
                className="p-1 rounded-full"
                style={{backgroundColor: themeColors.bgColor(1)}}>
                <Icon.Minus
                  strokeWidth={2}
                  height={20}
                  width={20}
                  stroke={'white'}
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      <View
        style={{backgroundColor: themeColors.bgColor(0.2)}}
        className="p-6 px-8 rounded-t-3xl space-y-4">
        <View className="flex-row justify-between">
          <Text className="text-gray-700">SubTotal</Text>
          <Text className="text-gray-700">₹{cartTotal}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Delivery Fee</Text>
          <Text className="text-gray-700">₹{deliveryFee}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700 font-extrabold">Order Total</Text>
          <Text className="text-gray-700 font-extrabold">₹{deliveryFee+cartTotal}</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('OrderPrepairing')}
            style={{backgroundColor: themeColors.bgColor(1)}}
            className="p-3 rounded-full">
            <Text className="text-white text-center font-bold text-lg">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;
