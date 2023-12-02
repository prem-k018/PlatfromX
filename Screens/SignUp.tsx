import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ImageBackground,
  Dimensions
} from 'react-native';
import {useState} from 'react';

function SignUp({navigation}:any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/signupScreen.png')} style={styles.image1}>
        <View style={styles.mainView}>
      <Text style={styles.login}>Let's get started</Text>
      <Text style={styles.text}>
        Please signup or login to continue using our app
      </Text>
      <TextInput
        style={styles.textInput}
        placeholder="Name"
        placeholderTextColor="#6E7191"
        value={name}
        onChangeText={setName}
      />
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
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('Signup Successfully')}>
        <Text style={styles.buttonText}>Join now</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', marginTop: 14, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 16, color: '#14142B'}}>
          Already have an account?{' '}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{fontSize: 16, color: '#4B9EF9'}}>Log in</Text>
        </TouchableOpacity>
      </View>
      </View>
      </ImageBackground>
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
  image1: {
    height: Dimensions.get('screen').height,
    width:Dimensions.get('screen').width
    // height: '100%',
    // width: '100%'
  },
  mainView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.7
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
    zIndex: -1,
    marginLeft: -8,
    marginTop: -8,
    // position:"absolute",
    // bottom: -Dimensions.get('screen').height/3.4,
    // left:-Dimensions.get('screen').width/1.62
  },
});

export default SignUp;
