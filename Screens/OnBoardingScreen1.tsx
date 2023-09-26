import {Button, Text, View, Image, StyleSheet} from 'react-native';

function OnBoardingScreen1({ navigation }) {
  return (
    <View>
      <Image
        source={{
          uri: 'https://as1.ftcdn.net/v2/jpg/02/12/42/60/1000_F_212426049_gQKk81T2PEzPFNMkU7LjbdEPa5Q52APZ.jpg',
        }}
        style={styles.image}
      />
      <Text style={styles.text}>Supercharging Progress</Text>
      <Button
        title="Second"
        onPress={() => navigation.navigate('OnBoardingScreen2')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    image: {
        height: 390,
        width: '100%',
    },
    text: {
        color: '#A0A3BD',
        marginLeft: 13,
        marginTop: 4,
        fontFamily: 'HClTech Roobert',
        fontSize : 16,
        lineHeight: 26,
    }
});

export default OnBoardingScreen1;
