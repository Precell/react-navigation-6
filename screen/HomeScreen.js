import React, { useState } from "react"
import { View, Text, ScrollView, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"
// import Carousel from "react-native-snap-carousel"
import Feather from 'react-native-vector-icons/Feather'
import BannerSlide from "../components/BannerSlide"
import CustomSwitch from "../components/CustomSwitch"
import ListItem from "../components/ListItem"
import { freeGames, paidGames } from "../model/data"
// import { windowWidth } from '../util/Dimensions'
// import { sliderData } from '../model/data'

const HomeScreen = ({navigation}) => {
    
    
    //     const renderBanner = ({item, index}) =>{
        //     return <BannerSlide data={item}/>
        //    } 
        
     const [gamesTab, setGamesTab] = useState(1)

   const onSelectSwitch = (value) =>{
    setGamesTab(value)
    
   }

    return (
        <SafeAreaView style={{flex:1, backgroundColor:"#fff"}}>
            <ScrollView style={{padding:20}}>
                <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:20}}>
                    <Text style={{fontSize:16}}>Hello John Doe</Text>  
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ImageBackground source={require('../assets/images/user-profile.jpg')} style={{width:35, height:35}} imageStyle={{borderRadius:25}}/>    
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection:'row', alignItems:'center', marginRight:10, borderColor:'#c6c6c6c', borderWidth:1, borderRadius:8, paddingHorizontal:10, paddingVertical:8 }} >
                    <Feather name="search" size={20} color="#c6c6c6"/>
                    <TextInput placeholder="Search"/>
                </View>

                <View style={{marginVertical:15, flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{fontSize:16}}>Upcoming Games</Text>
                    <TouchableOpacity onPress={() =>{}}>
                        <Text style={{color:'#0aada8'}}>See all</Text>
                    </TouchableOpacity>
                </View>
                
                {/* <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={sliderData}
                    renderItem={renderBanner}
                    sliderWidth={windowWidth - 40}
                    itemWidth={300}
                /> */}


                <View style={{marginVertical:20}}>
                    <CustomSwitch selectionMode={1} option1='free to play' option2='Paid games' onSelectSwitch={onSelectSwitch}/>
                </View>

                {gamesTab === 1 && 

                    freeGames.map((item) =>(<ListItem key={item.id} photo={item.poster} title={item.title} subTitle={item.subtitle} isFree={item.isFree} price={item.price}/>))
                }   

                {gamesTab === 1 && 

                    paidGames.map((item) =>(<ListItem key={item.id} photo={item.poster} title={item.title} subTitle={item.subtitle} isFree={item.isFree} price={item.price}/>))
                }                                             
            </ScrollView>
        </SafeAreaView>
         
    )
}

export default HomeScreen
