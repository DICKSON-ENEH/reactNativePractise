import { View,Image,  Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import Icon from "react-native-vector-icons/FontAwesome"
import pix from '../Components/assets/google-brand-black-google-logo-vector-number-symbol-text-trademark-transparent-png-144049.png'



const styles =StyleSheet.create({
    text:{
        margin:10,
        padding:10, 
        borderWidth:1,
        width:330,
        height:50,
        borderRadius:5
    },

    butstyle:{
   borderRadius:3,
   margin:10,
   width:330,
   height: 50,
   justifyContent:"center",
   alignItems:"center",
   borderColor:"#1e4c3d",
   borderWidth:2,
   flexDirection:"row",
   shadowColor:"black",
   shadowOffset:{width:2, height:4},

    },
    writes:{
        color:"#1e4c3d",
        fontSize:15,
        fontWeight:"bold",
    },
    newImage:{
      width:300,
      height:250,
      borderRadius:5,
      shadowOffset:{width:2, height:42},
      shadowColor:"black",
      shadowOpacity:1,
    },
    centerImage:{
      alignItems:"center"
    },
    container:{
      flex:1,
      backgroundColor:"#fff",
      alignItems:"center",
      justifyContent:"center",
    },
    img:{
      width:30,
      height:30,
      marginLeft:9,
    }
})
export default function Signup() {
    const [text, onChangeText]= useState("")
    const [textw, onChangeTextw]= useState("")
  return (
    <View style ={styles.container}>
      <View style={styles.centerImage}>  
        <Image 
        style={styles.newImage}
        source={{
uri: "https://burst.shopifycdn.com/photos/model-in-gold-fashion.jpg?width=500&format=pjpg&exif=1&iptc=1"
        }}
        />
      </View>
      <Text>Email</Text> 
      <TextInput 
      placeholder="Email"
      style={styles.text}
      value= {text}
      onChangeText={onChangeText}
      />
     <Text>Password</Text>
     <TextInput 
     placeholder ="password"
     style={styles.text}
     value={textw}
     onChangeTextw={onChangeTextw}
     />
      <TouchableOpacity style ={styles.butstyle}>
<Text style = {styles.writes}>Sign in </Text>
      </TouchableOpacity>
      <View>
      <TouchableOpacity style={styles.butstyle}>
        <Text style={styles.writes}>Signin With Google</Text>
        <Image source={pix} style={styles.img}/>
      </TouchableOpacity>
      </View>
      <Icon name ="home" size={30} color="#004080"/>
    </View>
  )
}