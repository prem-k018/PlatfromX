import {View, Text, StyleSheet} from 'react-native';

function OnBoardingScreen2() {
  return (
    <View style={styles.container}>
      <Text style={styles.color}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
        ducimus autem eum expedita. Repudiandae assumenda labore dolorem
        quibusdam, aperiam architecto quo nam dignissimos officia odit
        blanditiis doloribus delectus distinctio veniam dorlor minima natus
        officiis.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  color: {
    color: 'black',
  }
});

export default OnBoardingScreen2;
