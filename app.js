import React, {useState} from 'react';
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';

export default function App(){

const [sayac, setSayac] = useState(0);

    if (sayac >=5) {
      styles.button.backgroundColor = 'black';
    } else {
       styles.button.backgroundColor = 'blue';
    
    }


  return(

    <View style = {styles.container}>

<Text style = {styles.sayac_tasarim}>
{ sayac}

</Text>
<TouchableOpacity style={styles.button}


onPress  ={() => setSayac(sayac+1)



}

> 

<Text style = {styles.button_text}>Arttir</Text>
</TouchableOpacity>


<TouchableOpacity style={styles.button}
onPress  ={() => setSayac(0)}

> 

<Text style = {styles.button_text}>Sifirla</Text>
</TouchableOpacity>


<TouchableOpacity style={styles.button}
onPress  ={() => setSayac(sayac-1)}

> 

<Text style = {styles.button_text}>Azalt</Text>
</TouchableOpacity>



</View>


  );

}

const styles= StyleSheet.create({
container:{
  flex:1,

  alignItems:'center',
  justifyContent: 'center',
  flexDirection:'row',
  backgroundColor: 'pink',

  
},

button: {
  backgroundColor : 'blue',
  padding:20,
  borderRadius:5,
  margin:10,
  width:90,
  alignItems:'center',

},
button_text:{

  color: "#fff",
},


sayac_tasarim:{
  backgroundColor: 'black',
},

});




