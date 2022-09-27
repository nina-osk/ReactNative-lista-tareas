import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerTouchable:{
        flex:1,
        flexGrow:0.3,
        borderRadius:6,
        margin:20,
        justifyContent:'center',
     
    },
    container: {
        flex:1,
        borderRadius:6,
        shadowColor:'black',
        shadowOpacity: 0.26,
        shadowOffset:{width:0, height:1},
        shadowRadius:5,
        elevation:5,
        justifyContent:'center',
        alignItems:'center',
        padding:6,
    },
    text: {
        fontSize:28,
    },
   details: {
        fontSize:20,
    },
});

export default styles;