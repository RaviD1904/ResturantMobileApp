import {View, Text, ScrollView, TouchableOpacity, Image, Alert} from 'react-native';
import React, {useState} from 'react';
import {categories} from '../constant';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const handelClick=(id)=>{
    setActiveCategory(id)
  }
  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}>
        {categories.map((category, index) => {
          let isActive = category.id == activeCategory;
          let btnClass = isActive ? 'bg-gray-600' : 'bg-gray-200';
          let textClass = isActive
            ? 'font-semibold text-gray-800'
            : 'text-gray-500';  
          return (
            <View key={index} className="flex justify-center items-center mr-6">
              <TouchableOpacity
                onPress={() => handelClick(category.id)}
                className={`p-1 rounded-full shadow bg-gray-200 ${btnClass}`}>
                <Image style={{with: 45, height: 45}} source={category.image} />
              </TouchableOpacity>
              <Text className={`text-sm ${textClass}`}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
