import {SafeAreaView, ScrollView, StatusBar, Text, TextInput, View} from 'react-native';
import React from 'react';
import * as Icon from 'react-native-feather';
import {themeColors} from '../themes';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import { fetured } from '../constant';
const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />
      {/* search bar */}
      <View className="flex-row items-center space-x-2 px-4 pb-2 mt-4">
        <View className="flex-row flex-1 items-center p-1 rounded-full border border-gray-300">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput placeholder="Resturant" className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin width="20" height="20" stroke="gray" />
            <Text className="text-gray-600">Pune</Text>
          </View>
        </View>
        <View
          style={{backgroundColor: themeColors.bgColor(1)}}
          className="p-3 bg-gray-300 rounded-full">
          <Icon.Sliders
            height="20"
            width="20"
            stroke="white"
            strokeWidth={2.5}
          />
    </View>
      </View>
      {/* main */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:20}}>
        <Categories/>
        <View className="mt-5">
                {
                    fetured?.map((item,index)=>{
                        return (
                            <FeaturedRow
                            key={index}
                            title={item.title}
                            resturant={item.resturant}
                            description={item.description}
                            />
                        )
                    })
                }
        </View>
      
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
