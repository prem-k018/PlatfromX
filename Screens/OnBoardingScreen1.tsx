import {
  Button,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

function OnBoardingScreen1({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{flex: 0.5}}>
      <Image
        source={{
          uri: 'https://as1.ftcdn.net/v2/jpg/02/12/42/60/1000_F_212426049_gQKk81T2PEzPFNMkU7LjbdEPa5Q52APZ.jpg',
        }}
        style={styles.image}
      />
      </View>
      <View style={styles.middleView}>
      <Text style={styles.text}>Supercharging Progress</Text>
      <Text style={styles.content}>
        Progress. It comes from moving forward unwaveringly toward success.
      </Text>
      </View>
      <View style={styles.lowerView}>
      <View style={{flexDirection: 'row',marginLeft: 32}}>
        <View style={styles.circle1}></View>
        <View style={styles.circle2}></View>
        <View style={styles.circle1}></View>
      <View style={styles.button}>
        <TouchableOpacity
          onPress={() => navigation.navigate('OnBoardingScreen2')}>
          {/* <Text style={styles.buttonText}> &gt; </Text> */}
          <Ionicons name='chevron-forward-outline' color={'#000'} size={46} style={styles.buttonText}/>
          {/* <Image source={{uri:'https://images.app.goo.gl/t2guNYknzasH68e96'}}  */}
          {/* <Image source={{uri:'https://as1.ftcdn.net/v2/jpg/02/12/42/60/1000_F_212426049_gQKk81T2PEzPFNMkU7LjbdEPa5Q52APZ.jpg'}} 
          style={styles.image1} /> */}
        </TouchableOpacity>
      </View>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 390,
    width: '100%',
  },
  image1: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  middleView: {
    flex: 0.4,
  },
  text: {
    color: '#A0A3BD',
    marginLeft: 23,
    marginTop: 17,
    fontFamily: 'HClTech Roobert',
    fontSize: 16,
    lineHeight: 26,
  },
  content: {
    color: '#000000',
    fontSize: 36,
    fontFamily: 'HClTech Roobert',
    lineHeight: 46,
    marginLeft: 23,
  },
  lowerView: {
    flex: 0.1
  },
  button: {
    backgroundColor: '#dbdcf5',
    height: 67,
    width: 67,
    borderRadius: 33.5,
    alignItems: 'center',
    marginLeft: 184,
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#000000',
    fontSize: 40,
  },
  circle1: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#dbdcf5',
    marginTop: 35,
    marginRight: 8,
  },
  circle2: {
    height: 10,
    width: 20,
    borderRadius: 5,
    backgroundColor: '#303391',
    marginTop: 35,
    marginRight: 8,
  }
});

export default OnBoardingScreen1;
// #7ABEF7
// 100%
// #4080F5
// 100%
// #7747D5
// 100%
// #572AC2
