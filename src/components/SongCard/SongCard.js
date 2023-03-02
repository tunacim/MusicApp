import React from "react"
import {View ,Text,Image}from "react-native"
import styles from "./SongCard.style"
const SongCard =(props)=>{
return(
    <View>
        <Image style={styles.image} source={{uri:props.song.ImageUrl} }/>

        
        <View style={styles.innerContainer}> 
            <Text style={styles.title}>{props.song.title}</Text>
            <View style={styles.infoContainer}>
            <Text style={styles.artist}>{props.song.artist}</Text>
            <Text style={styles.year}>{props.song.year}</Text>
            </View>
        </View>
    </View>
)
}
export default SongCard;