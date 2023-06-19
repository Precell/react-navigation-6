import React from "react"
import { View, Image } from "react-native"

const BannerSlide = ({data}) => {
    return (
        <View>
            <Image soure={data.image} style={{height:150, width:300, borderRadius:10}}  />
        </View>
    )
}

export default BannerSlide
