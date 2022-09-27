import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        height:150,
        borderRadius:6,
        margin:15,
        justifyContent: 'center',
     
    },
    containerTouchable: {
        flex:1,
        borderRadius:6,
        shadowColor:'black',
        shadowOpacity: 0.26,
        shadowOffset:{width:0, height:2},
        shadowRadius:6,
        elevation:3,
        justifyContent:'flex-end',
        padding:8,
    },
    text: {
        fontSize:15,
    },
});

export default styles;