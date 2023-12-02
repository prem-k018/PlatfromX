import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';

const data = [
  {id: '1', text: 'Item 1', imageUrl: require('../assets/signupScreen.png')},
  {id: '2', text: 'Item 2', imageUrl: require('../assets/signupScreen.png')},
  {id: '3', text: 'Item 3', imageUrl: require('../assets/signupScreen.png')},
  // Add more data as needed
];

// const backgroundImage =

const Carousel = () => {
  const renderItem = ({item}) => (
    <View style={styles.carouselItem}>
      <Image source={item.imageUrl} style={styles.image} />
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://imgs.search.brave.com/osDKBjhXNPJ-lrz61HEqxoC9A2jHAm4xtSSSdHcMwn8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jaGVlcmZ1bC13/b21hbi11c2luZy1s/YXB0b3Atd29ya3Bs/YWNlXzEwOTcxMC02/MC5qcGc_c2l6ZT02/MjYmZXh0PWpwZw',
        }}
        style={styles.backgroundImage}>
          {/* <View style={{justifyContent: 'center', alignItems: 'center'}}> */}
        <Text style={styles.textOnImage}>Your text on the image</Text>
        {/* </View> */}
      </ImageBackground>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

// const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    height: 360,
    width: 360
  },
  textOnImage: {
    marginTop: 250,
    fontSize: 36
  },
  carouselItem: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    height: 191,
    width: 132,
    margin: 20,
  },
  image: {
    width: 52,
    height: 52,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default Carousel;
