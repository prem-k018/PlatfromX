import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

function OnBoardingScreen2() {
  const [selectedItems, setSelectedItems] = useState([]);

  const data = [
    {id: 1, text: 'Stories'},
    {id: 2, text: 'Article'},
    {id: 3, text: 'ST Reels'},
    {id: 4, text: 'Soundbg'},
    {id: 5, text: 'Tweets'},
    {id: 6, text: 'Magzines'},
    {id: 7, text: 'Videos'},
    {id: 9, text: 'Lives'},
    {id: 10, text: 'Stories'},
    {id: 11, text: 'Polls'},
    {id: 12, text: 'Quiz'},
    {id: 13, text: 'Infographics'},
    {id: 14, text: 'Surveys'},
    {id: 15, text: 'Launches'},
    {id: 16, text: 'Travels'},
    {id: 17, text: 'Podcast'},
  ];

  const toggleItem = itemId => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter(id => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const handleLogSelectedItems = () => {
    const selectedItemsText = selectedItems.map(itemId => {
      const selectedItem = data.find(item => item.id === itemId);
      return selectedItem ? selectedItem.text : null;
    });

    console.log('Selected Items: ', selectedItemsText);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Choose the content that you are interested.
      </Text>

      <View style={styles.flatListItem}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {data.map(item => (
            <TouchableOpacity
              key={item.id}
              onPress={() => toggleItem(item.id)}
              style={[
                styles.item,
                // isSelected ? styles.selectedItem : styles.unselectedItem,
                {
                  backgroundColor: selectedItems.includes(item.id)
                    ? 'black'
                    : 'white',
                },
              ]}>
              <Text
                style={[
                  // styles.textItem,
                  // isSelected ? styles.selectedText : styles.unselectedText,
                  {
                    color: selectedItems.includes(item.id) ? 'white' : 'black',
                    fontWeight: selectedItems.includes(item.id)
                      ? 'bold'
                      : 'normal',
                  },
                ]}>
                {item.text}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={{flexDirection: 'row', marginLeft: 23}}>
        <View style={styles.circle1}></View>
        <View style={styles.circle1}></View>
        <View style={styles.circle2}></View>
        <View style={styles.button}>
          <TouchableOpacity onPress={handleLogSelectedItems}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.buttonText}>Get Started</Text>
              <Text style={styles.buttonIcon}>
                <Ionicons
                  name="arrow-forward-outline"
                  color={'#fff'}
                  size={19}
                />
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    flex: 0.27,
    color: '#572AC2',
    fontSize: 36,
    lineHeight: 46,
    marginTop: 30,
    marginLeft: 32,
  },
  flatListItem: {
    flex: 0.7,
    marginLeft: 28,
  },
  scrollViewContent: {
    width: 350,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  item: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    margin: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 156,
    height: 47,
    marginLeft: 110,
    marginTop: 10,
    backgroundColor: '#5F1EBE',
    borderRadius: 5,
    gap: 12,
  },
  buttonText: {
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingLeft: 24,
    paddingVertical: 12,
  },
  buttonIcon: {
     flexShrink: 0,
     paddingTop:12,
     paddingLeft: 12,
  },
  circle1: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#dbdcf5',
    marginTop: 30,
    marginRight: 8,
  },
  circle2: {
    height: 10,
    width: 20,
    borderRadius: 5,
    backgroundColor: '#303391',
    marginTop: 30,
    marginRight: 5,
  },
});

export default OnBoardingScreen2;
