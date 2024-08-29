import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { themeColors } from '../themes'
import ResturantCard from './ResturantCard'

const FeaturedRow = ({title,resturant,description}) => {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4"> 
            <View>
                <Text className="font-bold text-lg">{title}</Text>
                <Text className="text-gray-500 text-xs">{description}</Text>
            </View>
            <TouchableOpacity>
                <Text style={{color:themeColors.text}} className="font-semibold">See All</Text>
            </TouchableOpacity>
      </View>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal:15
      }}
      className="overflow-visible py-5"
      >
        {
            resturant.map((item, index) =>{
                return (
                    <ResturantCard key={index} resturant={item}/>
                )
            })
        }
      </ScrollView>
    </View>
  )
}

export default FeaturedRow