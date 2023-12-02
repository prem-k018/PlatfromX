import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {useState} from 'react';
import {Image} from 'react-native';

function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.login}>Login</Text>
      <Text style={styles.text}>
        Please login or signup to continue using our app
      </Text>
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        placeholderTextColor="#6E7191"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        placeholderTextColor="#6E7191"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('OnBoardingScreen1')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', marginTop: 14, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 16, color: '#14142B'}}>
          Don't have an account?{' '}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={{fontSize: 16, color: '#4B9EF9'}}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 0.4}}>
      <Image
        source={{
          uri: 'https://s3-alpha-sig.figma.com/img/66d5/70b3/9c6441c0a05bd78920817a27b7be7b9a?Expires=1698019200&Signature=Hu-xUoEFyJ1AF7Bj47oPH8SoDUNf9IjdRpF0UxLOmlyEYEWWXP7ZhSZ7eVBZ2ZSf~g3S9W6bfp4u5aXeAfNllDDvisAfkmf6bsa3bNNXIu8F~dbr5rCvkJUrbeZD5njkaFpQRF0utR9gRBvL33MxlhEJQInnlp62NM8cBGEqT1s0tnUH~hL~g~6NeYTiCU3IbFhftnJNq15xfYLbx7IiCJDKDrDqEDxm0zozaTe8ua~tmTND3nCOCHI-bleQ72taTP1boCnXBPK4uom3CaQfaI8-Ro1SRDaBdpFBrFLHszw~iSKua2PTjPed8Wub~Ca6HpHq3c~n0fO6C-jrpCPEhw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        }}
        style={styles.image}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D7ECFD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    fontSize: 28,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 57.6,
    color: '#14142B',
    textAlign: 'center'
  },
  text: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24.4,
    color: '#4E4B66',
    width: 300,
    textAlign: 'center',
  },
  textInput: {
    display: 'flex',
    width: 305,
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 6,
    borderRadius: 5,
    color: 'black',
    borderWidth: 1,
    borderColor: '#D9DBE9',
    marginTop: 14,
    paddingLeft: 20,
  },
  button: {
    display: 'flex',
    width: 305,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    borderRadius: 5,
    backgroundColor: '#14142B',
    marginTop: 14,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
    color: 'white',
  },
  image: {
    height: 504,
    width: 496,
    flexShrink: 0,
    marginLeft: -68,
    marginTop: -68,
    marginBottom: -320,
    zIndex: -1,
  }
});

export default Login;
