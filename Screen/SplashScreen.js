
import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image
} from 'react-native';


const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      
      navigation.replace('Auth');
     
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../Images/logoimg.png')}
        style={{width: '90%', resizeMode: 'contain', margin: 30}}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});