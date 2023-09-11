import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor:"#27005D"
      },
    title:{
        fontSize: 30,
        color: "#E4F1FF"
    },
    button:{
        position:"absolute",
        width:65,
        height:65,
        borderRadius:65,
        backgroundColor:"#9400FF",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        bottom:10
    },
    buttonLeft:{
        left:10
    },
    buttonRight:{
        right:10
    },
    buttonText:{
        color:"#E4F1FF",
        alignSelf:"center",
        fontSize:20
    }
})
export default styles