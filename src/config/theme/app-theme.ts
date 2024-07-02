import { StyleSheet } from "react-native";
import { colors } from './colors';


export const globalStyles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor: colors.background
    },
    calculatorContainer:{
        flex:1,
        padding:20,
        justifyContent:'flex-end'
    },
    mainResult:{
        color: colors.textPrimary,
        fontSize: 70,
        fontWeight:'400',
        textAlign:'right',
        marginBottom:10,
    },

    subResult:{
        color: colors.textSecondary,
        fontSize:40,
        textAlign:'right',
        fontWeight:'300'
    },
    button:{
        height:80,
        width:80,
        backgroundColor:colors.darkGray,
        borderRadius:100,
        justifyContent:'center',
        marginHorizontal:10,
    },
    buttonText:{
        textAlign:'center',
        padding:10,
        fontSize:40,
        color:'white',
        fontWeight:'400'
    },
    row:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:18,
        paddingHorizontal:10
    }
})