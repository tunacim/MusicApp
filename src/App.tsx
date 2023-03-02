import React from "react";
import {View,SafeAreaView,Text,StyleSheet,FlatList} from "react-native"
import music_data from "./music-data.json"
import SongCard from "./components/SongCard"
function App(){
  const renderSong=({item})=> <SongCard song={item}/>
  const renderSeperator=()=><View style={styles.seperator}></View>
  return(
    <SafeAreaView style={styles.container}>
      <View>
      <FlatList 
      keyExtractor={item=>item.id}
      data={music_data}
      renderItem={renderSong}
      ItemSeparatorComponent={renderSeperator}
      />
      </View>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
container:{
  flex:1
},
seperator:{
  borderWidth:1,
  borderColor:"#e0e0e0"
},
  })

export default App;
