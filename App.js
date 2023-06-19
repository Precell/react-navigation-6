import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';


const Stack = createNativeStackNavigator();


const Main = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Text style={styles.title}>GAME ON</Text>
      </View>
      <View style={{width:300, height:200, backgroundColor:'#fff', flex:1,  justifyContent:'center', alignItems:'center'}}></View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttText}>Let's Begin</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize:30,
    fontWeight:'bold',
    color:'#20315f',
    marginTop:20
  },
  button:{
    backgroundColor:'#ad40af',
    padding:20,
    width:'90%',
    borderRadius:5,
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:50
  },
  buttText:{
    fontWeight:'bold',
    fontSize:18,
color:'#fff'
  },
});

export default App = () =>{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          component={Main}
          name='Main'
          options={{headerShown: false}}
        />
        <Stack.Screen 
          component={HomeScreen}
          name='Home'
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    )
}
