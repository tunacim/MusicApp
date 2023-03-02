import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container:{ padding:10,flexDirection:"row"},
    image:{
        width:100,
        height:100,
        borderRadius:50},
    innerContainer:{padding:10,flex:1,justifyContent:"center",},
    title:{fontWeight:"bold",fontSize:27,},
    infoContainer:{flexDirection:"row",flex:1,alignItems:"center",},
    year:{marginLeft:10,color:"gray",fontWeight:"bold",fontSize:12},
    soldTitle:{color:"red"},
    soldContainer:{borderWidth:1,borderColor:"red",padding:5,borderRadius:6},
    contentContainer:{flexDirection:"row",},
    
    album:{fontWeight:"200",padding:3},
    artist:{marginLeft:6}


})