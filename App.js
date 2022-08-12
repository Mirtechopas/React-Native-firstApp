import React, {useState} from "react";
import { 
  Text, 
  SafeAreaView, 
  StyleSheet, 
  Image, 
  View, 
  Button,
  TouchableOpacity 
} from "react-native";

function MyCustomButton(props) {
  return (
    <TouchableOpacity 
      style={[styles.button, props.style]} 
      onPress={props.onPress}
    >
      <Text style={[styles.buttonText, props.style]}>{props.title}</Text>
    </TouchableOpacity> 
  )
}


function App() {
  const [sayac, setCount] = useState(0);
  
  const handleIncrement = () => {
    setCount(sayac+1);
  };

  const handleDecrement = () => {
    setCount(sayac-1);
  };

  return (
  <SafeAreaView>
    <View style={styles.container}>
      <Image source={{uri: 'https://media.kommunity.com/communities/react-native-turkiye/20738/images-1.png'}} style={styles.image}></Image>
      <Text style={styles.text}>Sayaçmatik</Text>
      <Text style={styles.counterText}>Skor= {sayac}</Text>
      <Text style={styles.subtitle}>Sayacı değiştirmek için aşağıdaki butonlardan birine tıklayınız</Text>
      <View style={styles.buttonContainer}>
        <MyCustomButton title="Arttır  +++" onPress={handleIncrement}/>
        <MyCustomButton 
          title="Azalt  - - -" 
          onPress={handleDecrement}
          style={[styles.buttonText2, {marginStart: 20}]}/>
      </View>      
    </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row"
  },
  button: {
    backgroundColor: "lightgray",
    flex: 1,
    padding: 12,
    borderRadius: 20,
    alignItems: "center"
  },
  buttonText: {
    fontSize: 25,
    color: "green",
    textAlign: "center"
  },
  buttonText2: {
    fontSize: 25,
    color: "red",
    textAlign: "center"
  },
  container: {
    margin: 16
  },
  text: {
    fontSize: 80,
    marginTop: 20,
    textAlign: "center"
  },  
  counterText: {
    fontSize: 40,
    marginTop: 20,
    textAlign: "center",
    color: "lightblue",
    backgroundColor: "gray"
  },
  subtitle: {
    fontSize: 20,
    color: "gray",
    textAlign: "center",
    marginTop: 20
  },  
  image: {
    height: 250,
    borderRadius: 20
  },
});

export default App;