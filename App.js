import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View,Button } from 'react-native';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      name:'',
      password:'',
      adress:'',
    }
  }
 
  render(){
     function submit(){
    console.warn(this.state)
  }
  return (
    <View>
    <View style={styles.container}>
      <Text style={[styles.colour,styles.size]}>Open up App</Text>
      <Text>This is ....</Text>
      <Text style={styles.colour}>Tis is three time</Text>
      <TextInput style={{height:40,paddingLeft:30}}  onChangeText={(e)=>{console.warn(e)}}  placeholder="enter text here"></TextInput>
    <View>
      <Text>Forms in react native</Text>
      <TextInput style={styles.formstyle} placeholder="Enter your name" onChangeText={(text)=>{this.setState({name:text})}}></TextInput>
       
      <TextInput style={styles.formstyle} placeholder="Enter the Password" secureTextEntry={true} onChangeText={(text)=>{this.setState({name:text})}}></TextInput>
        
      <TextInput style={styles.formstyle} placeholder="Enter your current Address" onChangeText={(text)=>{this.setState({name:text})}}></TextInput>
      <Button onPress={()=>{submit()}} title="Submit"></Button>
    </View>
    </View>

    <View style={styles.lastv}><Text>welcome to mumbai</Text>
      </View>
</View>
  )
  }
}

const styles=StyleSheet.create({
  container:{
    alignItems:"center",
    backgroundColor:"skyblue",

  },
 colour:{
   color:'red',

 },
 size:{
   fontSize:'40px'
 },
 formstyle:{
   borderColor:'black',
   borderWidth:'2px',
   margin:7
 },
 lastv:{
   color:'red',
 }
})
export default App;