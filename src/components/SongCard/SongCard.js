import React from "react"
import {View ,Text,Image}from "react-native"
import styles from "./SongCard.style"

const SongCard =(props)=>{
return(
    <View style={styles.container}>
        <Image style={styles.image} source={{uri:props.song.imageUrl} }/>

        
        <View style={styles.innerContainer}> 
            <Text style={styles.title}>{props.song.title}</Text>
            <View style={styles.contentContainer}>
            <View style={styles.infoContainer}>

            <Text style={styles.artist}>{props.song.artist}</Text>
            <Text style={styles.year}>{props.song.year}</Text>
            
            </View>
            
            {props.song.isSoldOut &&(
            <View style={styles.soldContainer}>
                <Text style={styles.soldTitle}>TÜKENDİ</Text>
            </View>
            )}
            </View>
            <Text style={styles.album}> {props.song.album}</Text>
        </View>
    </View>
)
}
export default SongCard;