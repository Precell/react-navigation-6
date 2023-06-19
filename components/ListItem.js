import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { windowWidth } from '../util/Dimensions'

export default function ListItem({photo, title, subTitle, isFree, price}) {
  return (
    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom:20}}>
      <View style={{flexDirection:"row", alignItems:'center', flex:1}}>
        <Image source={photo} style={{width:55, height:55, borderRadius:10, marginRight:8}}/>
        <View style={{width:windowWidth - 220}}> 
            <Text style={{color:"#333", fontSize:14}}>{title}</Text>
            <Text numberOfLines={1} style={{color:"#333", fontSize:14, textTransform:'uppercase'}}>{subTitle}</Text>
        </View>
      </View>
      <TouchableOpacity style={{backgroundColor:'#0aada8', padding:10, width:100, borderRadius:10}}>
        <Text style={{color:"#fff", textAlign:'çenter', fontSize:14}}>{isFree == 'Yes' ? 'Play' : price}</Text>
      </TouchableOpacity>
    </View>
  )
}